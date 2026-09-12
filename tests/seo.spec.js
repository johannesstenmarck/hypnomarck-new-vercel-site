import { test, expect } from "@playwright/test";
import { PAGE_SEO } from "../src/seo/pageMeta.js";

test("all public pages expose unique content and metadata without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  await context.route("**/*", route => {
    if (new URL(route.request().url()).origin !== new URL(baseURL).origin || ["image", "font", "media"].includes(route.request().resourceType())) return route.abort();
    return route.continue();
  });
  const page = await context.newPage();
  for (const { path, title, description } of Object.values(PAGE_SEO)) {
    const response = await page.goto(`${baseURL}${path}`);
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://hypnomarck.se${path}`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator(".embedsocial-hashtag")).toHaveCount(0);
  }
  await expect(page.getByText("Jag är certifierad inom Hypnoterapi 2.0 av Dan och Sara Ahtola på Ahtola Vision.")).toBeVisible();
  await context.close();
});

test("React navigation replaces static metadata without duplicates", async ({ page }) => {
  await page.route("**/*", route => {
    if (["image", "font", "media"].includes(route.request().resourceType()) || /youtube|embedsocial|googletagmanager/.test(route.request().url())) return route.abort();
    return route.continue();
  });
  await page.goto("/");
  await page.getByRole("link", { name: "Läs mer om mig", exact: true }).click();
  await expect(page).toHaveTitle(PAGE_SEO.omMig.title);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://hypnomarck.se/om-mig");
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  await page.getByRole("button", { name: "Boka en gratis konsultation", exact: true }).click();
  await expect(page.getByRole("textbox", { name: /namn/i })).toBeVisible();
});
