import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { realpathSync } from "node:fs";
import { PAGE_SEO } from "../src/seo/pageMeta.js";
import { SITE_URL } from "../src/seo/siteConfig.js";

// Render the same React pages for every visitor, with no browser or network calls.
const server = await createServer({
  root: realpathSync(process.cwd()),
  configFile: false,
  server: { middlewareMode: true },
  appType: "custom",
  esbuild: { jsx: "automatic" },
  ssr: { noExternal: ["react-helmet-async"] },
  optimizeDeps: { noDiscovery: true, include: [] },
});
try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const template = await readFile("dist/index.html", "utf8");
  if (!template.includes('<div id="root"></div>')) throw new Error("Run vite build before prerendering.");
  for (const { path } of Object.values(PAGE_SEO)) {
    const { html, head } = render(path);
    const destination = resolve("dist", path === "/" ? "index.html" : `${path.slice(1)}.html`);
    await writeFile(destination, template
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta\s+name="description"[\s\S]*?>/, "")
      .replace("</head>", `${head}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  }
  // Derive discovery URLs from the same route metadata; no invented lastmod dates.
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.values(PAGE_SEO).map(({path}) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join("\n")}\n</urlset>\n`);
  console.log(`Prerendered ${Object.keys(PAGE_SEO).length} pages and sitemap.`);
} finally {
  await server.close();
}
