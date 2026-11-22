import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

test.beforeEach(async ({ page, baseURL }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem("cookieConsent")) localStorage.setItem("cookieConsent", "denied");
  });
  // Exercise the built clean-URL files without calling live services or sending mail.
  await page.route("**/*", async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.origin !== new URL(baseURL).origin) return route.abort();
    if (request.method() !== "GET") return route.fulfill({ status: 503, json: { error: "Live requests disabled in tests" } });
    const root = resolve("dist");
    const path = url.pathname === "/" ? "index.html" : url.pathname.slice(1) + (extname(url.pathname) ? "" : ".html");
    const file = resolve(root, path);
    if (!file.startsWith(root + sep)) return route.abort();
    const contentType = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml" }[extname(file)] || "application/octet-stream";
    try { return await route.fulfill({ body: await readFile(file), contentType }); }
    catch { return route.fulfill({ status: 404, body: "Not found" }); }
  });
});

const heading = page => page.getByRole("heading", { name: "Boka gratis konsultation", exact: true });
const close = async page => heading(page).locator("..").getByRole("button").click();

test("permanent QR URL opens one existing form on direct entry and refresh", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const response = await page.goto("/boka");
  expect(response.status()).toBe(200);
  await expect(heading(page)).toBeVisible();
  await expect(page.locator("form")).toHaveCount(1);
  await expect(page.getByLabel("Namn *", { exact: true })).toBeVisible();
  await expect(page).toHaveURL(/\/boka$/);
  await page.screenshot({ path: "../../outputs/boka-390.png" });
  await close(page);
  await expect(heading(page)).toHaveCount(0);
  await expect(page).toHaveURL(/\/boka$/);
  expect((await page.reload()).status()).toBe(200);
  await expect(heading(page)).toBeVisible();
  await expect(page.locator("form")).toHaveCount(1);
});

test("QR query parameters survive without a redirect, and the form reopens on return", async ({ page }) => {
  const path = "/boka?utm_source=qr&utm_campaign=tryckt";
  await page.goto(path);
  await expect(heading(page)).toBeVisible();
  await expect(page).toHaveURL(new RegExp(path.replace("?", "\\?") + "$"));
  await close(page);
  await page.getByRole("link", { name: "Läs mer om mig", exact: true }).click();
  await expect(page).toHaveURL(/\/om-mig$/);
  await page.goBack();
  await expect(heading(page)).toBeVisible();
  await expect(page.locator("form")).toHaveCount(1);
});

test("normal booking buttons remain closed initially and use the same form", async ({ page }) => {
  for (const path of ["/", "/hypnoterapi-online"]) {
    await page.goto(path);
    await expect(heading(page)).toHaveCount(0);
    const button = page.getByRole("main").getByRole("button", { name: "Boka gratis konsultation", exact: true }).first();
    await button.click();
    await expect(heading(page)).toBeVisible();
    await expect(page.locator("form")).toHaveCount(1);
    await close(page);
    await expect(heading(page)).toHaveCount(0);
    await button.click();
    await expect(heading(page)).toBeVisible();
    await expect(page.getByLabel("Namn *", { exact: true })).toHaveValue("");
  }
});

test("QR entry preserves validation, API retries and consent-aware booking events", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("cookieConsent", "granted"));
  const payloads = [];
  await page.route("**/api/send-booking", route => {
    payloads.push(route.request().postDataJSON());
    return route.fulfill({ status: payloads.length === 1 ? 500 : 200, json: payloads.length === 1 ? { error: "Test failure" } : { ok: true } });
  });
  await page.goto("/boka");
  await expect(heading(page)).toBeVisible();
  const submit = page.getByRole("button", { name: "Skicka bokningsförfrågan", exact: true });
  await submit.click();
  expect(payloads).toEqual([]);
  await page.getByLabel("Namn *", { exact: true }).fill("Testperson");
  await page.getByLabel("E-post *", { exact: true }).fill("test@example.com");
  await page.getByLabel("Telefon *", { exact: true }).fill("0700000000");
  await page.getByLabel("Vad söker du hjälp med? *", { exact: true }).fill("Test av det befintliga flödet");
  await page.getByLabel("Jag godkänner att mina uppgifter behandlas enligt integritetspolicyn").check();
  await submit.click();
  await expect(page.getByText("Test failure", { exact: true })).toBeVisible();
  await submit.click();
  await expect(page.getByText("Tack för din förfrågan! Jag återkommer till dig inom 24 h.")).toBeVisible();
  expect(payloads).toHaveLength(2);
  expect(payloads[1]).toEqual(payloads[0]);
  expect(payloads[1].email).toBe("test@example.com");
  const events = await page.evaluate(() => window.dataLayer.map(args => Array.from(args)).filter(args => args[0] === "event"));
  expect(events).toEqual([["event", "booking_start", { form_id: "consultation" }], ["event", "generate_lead", { form_id: "consultation" }]]);
});
