import OnlineInformation from "../components/OnlineInformation.jsx";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

export default function OnlinePage() {
  const { openBooking } = useOutletContext();
  return (
    <>
      <Seo {...PAGE_SEO.online} jsonLd={[getBreadcrumbJsonLd([
        { name: "Hem", path: "/" },
        { name: "Hypnoterapi online", path: PAGE_SEO.online.path },
      ])]} />
      <article className="relative z-10 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-emerald-950/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-emerald-700/30 text-white">
          <h1 className="text-3xl md:text-5xl font-serif mb-6">Hypnoterapi online med Johannes Stenmarck</h1>
          <OnlineInformation>
          <button type="button" onClick={openBooking} className="px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition">Boka gratis konsultation</button>
          </OnlineInformation>
        </div>
      </article>
    </>
  );
}
