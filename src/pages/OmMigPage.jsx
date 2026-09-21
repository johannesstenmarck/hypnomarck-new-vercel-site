import AboutContent from "../components/AboutContent.jsx";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd, getProfileJsonLd } from "../seo/homeJsonLd.js";

export default function OmMigPage() {
  const { openBooking } = useOutletContext();

  return (
    <>
      <Seo
        title={PAGE_SEO.omMig.title}
        description={PAGE_SEO.omMig.description}
        path={PAGE_SEO.omMig.path}
        keywords={PAGE_SEO.omMig.keywords}
        jsonLd={[
          getProfileJsonLd(),
          getBreadcrumbJsonLd([
            { name: "Hem", path: "/" },
            { name: "Om mig", path: "/om-mig" }
          ])
        ]}
      />
      <AboutContent openBooking={openBooking} />
    </>
  );
}
