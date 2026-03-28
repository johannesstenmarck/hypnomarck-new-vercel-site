import { SITE_URL, absoluteUrl } from "./siteConfig.js";

/** Rich results: verksamhet + person + webbplats (endast startsida). */
export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Hypnomarck",
        description:
          "Hypnoterapeut och coach i Stockholm. Hypnoterapi, coaching och gratis konsultation online.",
        inLanguage: "sv-SE",
        publisher: { "@id": `${SITE_URL}/#business` }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: "Hypnomarck",
        alternateName: "Johannes Stenmarck Hypnoterapeut och Coach",
        url: SITE_URL,
        email: "info@hypnomarck.se",
        image: absoluteUrl("/profile.jpg"),
        description:
          "Certifierad hypnoterapeut och coach. Hypnoterapi för ångest, sömn, självkänsla och stress – online och med fokus på hållbar förändring.",
        areaServed: {
          "@type": "City",
          name: "Stockholm"
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stockholm",
          addressCountry: "SE"
        },
        priceRange: "$$"
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Johannes Stenmarck",
        jobTitle: "Hypnoterapeut och coach",
        url: `${SITE_URL}/om-mig`,
        image: absoluteUrl("/profile.jpg"),
        email: "info@hypnomarck.se",
        worksFor: { "@id": `${SITE_URL}/#business` },
        sameAs: ["https://www.instagram.com/hypnomarck"]
      }
    ]
  };
}

export function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`
    }))
  };
}
