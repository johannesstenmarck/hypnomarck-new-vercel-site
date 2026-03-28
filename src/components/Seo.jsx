import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, absoluteUrl } from "../seo/siteConfig.js";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.path - pathname t.ex. "/" eller "/om-hypnos"
 * @param {string} [props.keywords]
 * @param {string} [props.ogImagePath] - default /profile.jpg
 * @param {object[]} [props.jsonLd] - objekt som stringifyas till JSON-LD
 */
export default function Seo({ title, description, path, keywords, ogImagePath = "/profile.jpg", jsonLd }) {
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath === "" ? "" : canonicalPath}`;
  const ogImage = absoluteUrl(ogImagePath);

  return (
    <Helmet>
      <html lang="sv" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Johannes Stenmarck" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Johannes Stenmarck – Hypnoterapeut" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd?.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
}
