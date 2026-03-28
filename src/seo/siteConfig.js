/** Primär kanonisk domän (används i meta, structured data, sitemap). */
export const SITE_URL = "https://hypnomarck.se";

export const SITE_NAME = "Hypnomarck";

export function absoluteUrl(pathname) {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${p}`;
}
