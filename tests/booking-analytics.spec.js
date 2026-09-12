import { test, expect } from "@playwright/test";

async function setup(page, choice) {
  await page.addInitScript(choice => localStorage.setItem("cookieConsent", choice), choice);
  await page.route("**/*", route => {
    const request = route.request();
    if (["image", "font", "media"].includes(request.resourceType()) || /youtube|embedsocial|googletagmanager/.test(request.url())) return route.abort();
    return route.continue();
  });
  await page.goto("/hypnoterapi-online");
  await page.getByRole("main").getByRole("button", { name: "Boka gratis konsultation", exact: true }).click();
  await page.getByLabel("Namn *", { exact: true }).fill("Testperson");
  await page.getByLabel("E-post *", { exact: true }).fill("test@example.com");
  await page.getByLabel("Telefon *", { exact: true }).fill("0700000000");
  await page.getByLabel("Vad söker du hjälp med? *", { exact: true }).fill("Private test message");
  await page.getByLabel("Jag godkänner att mina uppgifter behandlas enligt integritetspolicyn").check();
}

const events = page => page.evaluate(() => window.dataLayer.map(args => Array.from(args)).filter(args => args[0] === "event"));

test("only successful booking requests become leads, without form data", async ({ page }) => {
  await setup(page, "granted");
  let attempts = 0;
  await page.route("**/api/send-booking", route => {
    attempts += 1;
    return route.fulfill({ status: attempts === 1 ? 500 : 200, json: attempts === 1 ? { error: "Test failure" } : { ok: true } });
  });
  await page.getByRole("button", { name: "Skicka bokningsförfrågan" }).click();
  await expect(page.getByText("Test failure", { exact: true })).toBeVisible();
  expect(await events(page)).toEqual([["event", "booking_start", { form_id: "consultation" }]]);
  await page.getByRole("button", { name: "Skicka bokningsförfrågan" }).click();
  await expect(page.getByText("Tack för din förfrågan! Jag återkommer till dig inom 24 h.")).toBeVisible();
  expect(await events(page)).toEqual([
    ["event", "booking_start", { form_id: "consultation" }],
    ["event", "generate_lead", { form_id: "consultation" }],
  ]);
});

test("denied visitors can send requests without analytics events", async ({ page }) => {
  await setup(page, "denied");
  await page.route("**/api/send-booking", route => route.fulfill({ json: { ok: true } }));
  await page.getByRole("button", { name: "Skicka bokningsförfrågan" }).click();
  await expect(page.getByText("Tack för din förfrågan! Jag återkommer till dig inom 24 h.")).toBeVisible();
  expect(await events(page)).toEqual([]);
  // Later consent must not replay actions performed while denied.
  await page.evaluate(() => window.siteConsent.setChoice("granted"));
  expect(await events(page)).toEqual([]);
});
