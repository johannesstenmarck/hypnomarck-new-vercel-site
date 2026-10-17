import { Link } from 'react-router-dom';
import PreviewFrame from '../components/PreviewFrame.jsx';
import IntroVideo from '../components/IntroVideo.jsx';
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd, getProfileJsonLd } from "../seo/homeJsonLd.js";

export default function OmMigPage() {
  return (
    <PreviewFrame>{({openBooking}) => <>
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
      <article className="hp-profile hp-sheet hp-section">
        <div className="hp-profile-intro"><div><p className="hp-eyebrow">MÄNNISKAN BAKOM HYPNOMARCK</p><h1>Jag heter<br/>Johannes.</h1><p className="hp-profile-role">Hypnoterapeut och Coach</p><p className="hp-lead">Jag vill att du ska känna dig trygg att vara dig själv, nyfiken på ditt inre och med stöd att möta det du vill förändra.</p></div><img src="/profile.jpg" alt="Johannes Stenmarck" width="800" height="1000"/></div>
        <div className="hp-profile-reading">
          <h2>En nyfikenhet som följt med länge.</h2>
          <p>Jag har varit skådespelare i över 20 år. Psykologi, människans undermedvetna och självutveckling har intresserat mig minst lika länge. Jag fascineras av det som finns inom oss och av möjligheten att ge något nytt uttryck.</p>
          <p>Vägen till att själv bli hypnoterapeut började med min egen erfarenhet av hypnos hos Dan Ahtola. Den gav mig ett nytt perspektiv på ett mönster jag länge burit med mig. Jag ville förstå mer, utbilda mig och arbeta med andra.</p>
          <details className="hp-reading-details hp-own-story"><summary>Min egen vändpunkt <span aria-hidden="true">+</span></summary><p>I nära relationer hade jag länge kämpat med starka känslor och ilskeutbrott. Det påverkade både mig och den jag var tillsammans med.</p><p>Under en hypnossession fick jag se på en svår upplevelse från barndomen ur ett annat perspektiv. Jag hade pratat om den tidigare, men det här mötet med min egen upplevelse blev en vändpunkt för mig. Efter sessionen upplevde jag att mönstret förändrades.</p><p>Sedan dess har jag inte upplevt de orimligt starka, ohanterliga känsloutbrott som tidigare plågade mig. Jag är i en kärleksfull och trygg relation där konflikter kan mötas lugnt och medkännande. Den egna erfarenheten var avgörande för att jag ville gå den här vägen.</p></details>
          <h2>Hur jag vill möta dig.</h2>
          <p>Jag brukar börja med att fråga vad som har gjort att du tagit kontakt. Vad märker du av i vardagen, och hur skulle du vilja att det var i stället? Jag lyssnar efter känslorna du beskriver och när de dyker upp.</p>
          <p>Om du inte vet är det okej. Jag ser en möjlighet också i ovetandet. Vi kan stanna upp, känna efter och låta något bli tydligare utan att pressa fram ett svar.</p>
          <p>Du får välja hur mycket du berättar. Jag kan anpassa guidningen så att du behåller privata detaljer för dig själv. Du får säga nej, byta riktning, pausa eller avsluta. Jag pushar aldrig.</p>
          <h2>Lite mer av människan Johannes.</h2>
          <p>Jag tycker om astrologi och tarot, Ninja Turtles och Star Wars, och japansk och kinesisk stridskonst. Det är några av de saker jag gärna ägnar min nyfikenhet åt utanför arbetet.</p>
          <p className="hp-qualification">Utbildad inom Trancemorf Hypnoterapi via Dan och Sara Ahtola på Ahtola Vision.</p>
          <p>Mitt arbete gäller coaching och personlig utveckling med hypnos som verktyg. Under konsultationen känner vi efter om mitt arbetssätt passar det du behöver.</p>
          <Link className="hp-text-link" to="/hypnoterapi-online">Så går våra möten till <span aria-hidden="true">↗</span></Link>
          <div className="hp-profile-contact"><p>Om du vill får vi börja med att prata en stund.</p><button className="hp-button" onClick={openBooking}>Boka gratis konsultation</button></div>
        </div>
      </article>
      <IntroVideo/>
    </>}</PreviewFrame>
  );
}
