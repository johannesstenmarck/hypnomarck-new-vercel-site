import OnlineInformation from "../components/OnlineInformation.jsx";
import PreviewFrame from '../components/PreviewFrame.jsx';
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

export default function OnlinePage() {
  return (
    <PreviewFrame>{({openBooking}) => <>
      <Seo {...PAGE_SEO.online} jsonLd={[getBreadcrumbJsonLd([
        { name: "Hem", path: "/" },
        { name: "Hypnoterapi online", path: PAGE_SEO.online.path },
      ])]} />
      <article className="hp-online hp-sheet hp-section">
          <p className="hp-eyebrow">SÅ GÅR VÅRA MÖTEN TILL</p>
          <h1>Från ett första samtal<br/>till det du tar med dig.</h1>
          <OnlineInformation>
          <div className="hp-profile-contact"><p>Du behöver inte ha alla svar innan vi hörs.</p><button type="button" onClick={openBooking} className="hp-button">Boka gratis konsultation</button></div>
          </OnlineInformation>
      </article>
    </>}</PreviewFrame>
  );
}
