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
          "Hypnoterapi, förändringscoaching och gratis konsultation online med Johannes Stenmarck.",
        inLanguage: "sv-SE",
        publisher: { "@id": `${SITE_URL}/#business` }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#business`,
        name: "Hypnomarck",
        alternateName: "Johannes Stenmarck Hypnoterapeut och Coach",
        url: SITE_URL,
        email: "info@hypnomarck.se",
        image: absoluteUrl("/profile.jpg"),
        description:
          "Hypnoterapi och förändringscoaching online för privatpersoner samt företagsuppdrag på arbetsplatsen.",
        sameAs: ["https://www.instagram.com/hypnomarck/"],
        founder: { "@id": `${SITE_URL}/#person` }
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
        sameAs: ["https://www.instagram.com/hypnomarck/"],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Hypnoterapi 2.0",
          credentialCategory: "Certifiering",
          recognizedBy: { "@type": "Organization", name: "Ahtola Vision" }
        }
      }
    ]
  };
}

export function getProfileJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...getHomeJsonLd()["@graph"],
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/om-mig#webpage`,
        url: `${SITE_URL}/om-mig`,
        name: "Johannes Stenmarck – hypnoterapeut och förändringscoach",
        inLanguage: "sv-SE",
        mainEntity: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` }
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

