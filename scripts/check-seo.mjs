import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PAGE_SEO } from "../src/seo/pageMeta.js";

for (const { path, title } of Object.values(PAGE_SEO)) {
  const html = await readFile(`dist/${path === "/" ? "index" : path.slice(1)}.html`, "utf8");
  assert.equal((html.match(/<title[ >]/g) || []).length, 1, `${path}: one title`);
  assert.ok(html.includes(title), `${path}: route-specific title`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${path}: one description`);
  assert.ok(html.includes(`href="https://hypnomarck.se${path}"`), `${path}: canonical`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: readable content without JS`);
  assert.ok(html.includes("Johannes Stenmarck"), `${path}: identity`);
  assert.ok(!/<iframe[^>]+src="https:\/\/(www\.)?youtube\.com\//.test(html), `${path}: YouTube uses privacy-enhanced mode`);
  assert.ok(!html.includes('ssrc="'), `${path}: valid iframe source`);
  assert.ok(!/<script[^>]+src="https:\/\/(www\.googletagmanager|embedsocial)/.test(html), `${path}: no tracking loaders in static HTML`);
  assert.ok(!/<iframe[^>]+embedsocial/.test(html), `${path}: no social iframe before consent`);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    JSON.parse(match[1]);
  }
}
const config = JSON.parse(await readFile("vercel.json", "utf8"));
assert.ok(!config.rewrites, "Unknown routes must return a real 404, not the home page");
const sitemap = await readFile("dist/sitemap.xml", "utf8");
for (const { path } of Object.values(PAGE_SEO)) {
  assert.ok(sitemap.includes(`<loc>https://hypnomarck.se${path}</loc>`), `${path}: sitemap discovery`);
}
console.log(`SEO checks passed: ${Object.keys(PAGE_SEO).length} static pages, metadata, JSON-LD, consent gates and routing.`);
