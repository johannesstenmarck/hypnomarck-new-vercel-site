import { test, expect } from "@playwright/test";

// Run the built site on the real hostname in an isolated browser context.
// External services are mocked: tests never send analytics or load social media.
const origin = "https://www.hypnomarck.se";
const preview = process.env.CONSENT_PREVIEW_URL || "http://127.0.0.1:4173";
const gaNames = (cookies) => cookies.filter(({ name }) => name === "_ga" || name.startsWith("_ga_"));

test.afterEach(async ({ context }) => {
  // Withdrawal intentionally cancels requests. Ignore only unfinished handlers
  // during teardown, after all consent assertions have completed.
  await context.unrouteAll({ behavior: "ignoreErrors" });
});

async function revokeAndReload(page) {
  await Promise.all([
    page.waitForEvent("framenavigated", { predicate: (frame) => frame === page.mainFrame() }),
    page.getByRole("button", { name: "Neka", exact: true }).click(),
  ]);
  await page.waitForLoadState("domcontentloaded");
}

async function setup(context, { choice, delayGoogle = false, brokenStorage = false } = {}) {
  const requests = { google: 0, social: 0 };
  await context.addInitScript(({ choice, brokenStorage }) => {
    if (!sessionStorage.getItem("test-initialized")) {
      if (choice) localStorage.setItem("cookieConsent", choice);
      sessionStorage.setItem("test-initialized", "yes");
    }
    if (brokenStorage) {
      Storage.prototype.getItem = () => { throw new Error("Storage blocked"); };
      Storage.prototype.setItem = () => { throw new Error("Storage blocked"); };
    }
  }, { choice, brokenStorage });
  await context.route("**/*", async (route) => {
    // Large decorative assets are irrelevant to consent behavior.
    if (["image", "font", "media"].includes(route.request().resourceType())) return route.abort();
    const url = new URL(route.request().url());
    if (url.origin === origin) {
      const response = await route.fetch({ url: `${preview}${url.pathname}${url.search}` });
      return route.fulfill({ response });
    }
    if (url.hostname === "www.googletagmanager.com") {
      requests.google += 1;
      if (delayGoogle) return; // Keep download pending through withdrawal.
      return route.fulfill({ contentType: "application/javascript", body: `
        if (!window['ga-disable-G-L1S93XFX4K']) {
          document.cookie = '_ga=test; Path=/; Domain=.hypnomarck.se; Secure';
          document.cookie = '_ga_L1S93XFX4K=test; Path=/; Domain=.hypnomarck.se; Secure';
        }
      ` });
    }
    if (url.hostname === "embedsocial.com") {
      requests.social += 1;
      return route.fulfill({ contentType: "application/javascript", body: `
        const widget = document.querySelector('.embedsocial-hashtag');
        if (widget) widget.innerHTML = '<iframe title="Test Instagram feed" src="about:blank"></iframe>';
      ` });
    }
    return route.abort();
  });
  return requests;
}

async function expectDenied(page, context) {
  await expect(page.locator(".embedsocial-hashtag")).toHaveCount(0);
  await expect(page.getByText("Tankar om självkänsla, relationer och förändring.")).toBeVisible();
  await expect.poll(async () => gaNames(await context.cookies())).toEqual([]);
  expect(await page.evaluate(() => {
    const calls = window.dataLayer.map((args) => Array.from(args));
    return calls.filter(([command]) => command === "consent").at(-1)[2].analytics_storage;
  })).toBe("denied");
}

test("fresh visit, deny, reload: no GA cookies or external loaders", async ({ page, context }) => {
  const requests = await setup(context);
  await page.goto(origin);
  await expect(page.getByRole("button", { name: "Godkänn statistik", exact: true })).toBeVisible();
  await expectDenied(page, context);
  await page.getByRole("button", { name: "Neka", exact: true }).click();
  await page.reload();
  await expectDenied(page, context);
  expect(requests).toEqual({ google: 0, social: 0 });
  expect(await page.evaluate(() => localStorage.getItem("cookieConsent"))).toBe("denied");
  expect(await page.locator("iframe[src*='youtube-nocookie.com']").count()).toBe(1);
});

test("accept, withdraw host/domain/path cookies, reload, and accept again", async ({ page, context }) => {
  const requests = await setup(context);
  await page.goto(origin);
  await page.getByRole("button", { name: "Godkänn statistik", exact: true }).click();
  await expect(page.getByTitle("Test Instagram feed")).toBeVisible();
  await expect.poll(async () => gaNames(await context.cookies()).length).toBe(2);
  await context.addCookies([
    { name: "_ga", value: "host", url: origin },
    { name: "_ga_host", value: "host", url: origin },
    { name: "_ga_path", value: "path", domain: ".hypnomarck.se", path: "/om-hypnos" },
    { name: "essential", value: "keep", url: origin },
  ]);
  await page.goto(`${origin}/om-hypnos`);
  await page.getByRole("button", { name: "Cookie-inställningar", exact: true }).click();
  await revokeAndReload(page);
  await expect.poll(async () => gaNames(await context.cookies())).toEqual([]);
  const socialBefore = requests.social;
  await page.goto(origin);
  await expectDenied(page, context);
  expect(requests.social).toBe(socialBefore);
  expect((await context.cookies()).some(({ name }) => name === "essential")).toBe(true);
  await page.getByRole("button", { name: "Cookie-inställningar", exact: true }).click();
  await page.getByRole("button", { name: "Godkänn statistik", exact: true }).click();
  await expect(page.getByTitle("Test Instagram feed")).toBeVisible();
  await expect.poll(async () => gaNames(await context.cookies()).length).toBe(2);
});

test("saved denial cleans legacy cookies before any loader", async ({ page, context }) => {
  const requests = await setup(context, { choice: "denied" });
  await context.addCookies([{ name: "_ga", value: "legacy", domain: ".hypnomarck.se", path: "/" }]);
  await page.goto(origin);
  await expectDenied(page, context);
  expect(requests).toEqual({ google: 0, social: 0 });
});

test("withdraw while Google is downloading: no reload of either service", async ({ page, context }) => {
  const requests = await setup(context, { delayGoogle: true });
  await page.goto(origin);
  await page.getByRole("button", { name: "Godkänn statistik", exact: true }).click();
  await expect(page.getByTitle("Test Instagram feed")).toBeVisible();
  await page.getByRole("button", { name: "Cookie-inställningar", exact: true }).click();
  await revokeAndReload(page);
  await expectDenied(page, context);
  expect(requests).toEqual({ google: 1, social: 1 });
});

test("blocked storage fails closed and the banner remains usable", async ({ page, context }) => {
  const requests = await setup(context, { brokenStorage: true });
  await page.goto(origin);
  await expectDenied(page, context);
  await page.getByRole("button", { name: "Neka", exact: true }).click();
  await expect(page.getByRole("button", { name: "Neka", exact: true })).toHaveCount(0);
  expect(requests).toEqual({ google: 0, social: 0 });
});

test("denial in another tab revokes a saved grant", async ({ page, context }) => {
  await setup(context, { choice: "granted" });
  await page.goto(origin);
  await expect(page.getByTitle("Test Instagram feed")).toBeVisible();
  const other = await context.newPage();
  await other.goto(origin);
  await other.getByRole("button", { name: "Cookie-inställningar", exact: true }).click();
  await revokeAndReload(other);
  await expectDenied(page, context);
  await expectDenied(other, context);
});
