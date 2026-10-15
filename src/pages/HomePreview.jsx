import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BookingModal from '../components/BookingModal.jsx';
import '../preview.css';
import '../atmosphere.css';

const questions = [
 ['Behöver jag veta vad jag vill arbeta med?', 'Nej. Du får gärna komma med en tanke, en fråga eller något du ännu inte riktigt kan sätta ord på. Vi börjar där.'],
 ['Hur går ett möte online till?', 'Vi ses via videosamtal. Välj en lugn plats där du kan vara ostörd och använd en stabil internetanslutning. Du får praktisk information när vi har bestämt en tid.'],
 ['Vad innebär hypnos i ditt arbetssätt?', 'Hypnos används som en metod för fokuserad uppmärksamhet och guidade övningar. Jag berättar om upplägget innan vi börjar. Upplevelser och resultat varierar, och du kan be om en paus eller avsluta.'],
 ['Måste jag bestämma mig efter första samtalet?', 'Nej. Konsultationen är till för att vi ska få träffas och för att du ska kunna ställa frågor. Efteråt får du känna efter om du vill gå vidare.'],
 ['Är detta hälso- och sjukvård?', 'Jag är certifierad hypnoterapeut och coach, utan vårdlegitimation. Mitt erbjudande gäller coaching, mental träning och personlig utveckling. Det ersätter inte medicinsk eller psykologisk bedömning och behandling.']
];
const navigation = [['För dig', 'for-dig'], ['Om Johannes', 'om-johannes'], ['Så går det till', 'sa-gar-det-till'], ['Frågor & priser', 'fragor']];

function Wordmark() {
 return <a href="#" className="hp-brand hp-lockup" aria-label="Hypnomarck, startsida"><span className="hp-brand-text"><span className="hp-wordmark">hypnomarck</span><span className="hp-tagline">Förändring börjar under ytan</span></span></a>;
}

function SessionPrices({ open, onClose }) {
 const dialog = useRef(null);
 useEffect(() => {
  if (!open) return;
  const previous = document.activeElement;
  const overflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.current.showModal();
  return () => { dialog.current?.close(); document.body.style.overflow = overflow; previous?.focus(); };
 }, [open]);
 return <dialog ref={dialog} className="hp-rates" aria-labelledby="rates-title" onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { const r = e.currentTarget.getBoundingClientRect(); if (e.target === e.currentTarget && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) onClose(); }}>
  <div className="hb-heading"><div><p className="hp-eyebrow">PRAKTISK INFORMATION</p><h2 id="rates-title">Sessioner och priser</h2></div><button className="hb-close" onClick={onClose} aria-label="Stäng priser">×</button></div>
  <p>Här kan du läsa om de olika uppläggen i lugn och ro. Vi pratar om vad som kan passa dig innan du bestämmer dig.</p>
  <dl>
   <div><dt>Gratis konsultation <span>0 kr</span></dt><dd>Cirka 30 minuter online. Vi pratar om vad du vill utforska och du får ställa dina frågor.</dd></div>
   <div><dt>Enskild session <span>3 000 kr</span></dt><dd>75–90 minuter online. En individuell session, förinspelad mental träning och uppföljningssamtal.</dd></div>
   <div><dt>Fyra sessioner <span>8 000 kr</span></dt><dd>Fyra individuella sessioner, fyra förinspelade sessioner och uppföljningssamtal.</dd></div>
  </dl>
  <p className="hp-rates-note">Ett visst resultat eller antal sessioner kan inte garanteras. Vi kommer överens om mål och upplägg tillsammans.</p>
 </dialog>;
}

export default function HomePreview() {
 const [booking, setBooking] = useState(false);
 const [prices, setPrices] = useState(false);
 const [menu, setMenu] = useState(false);
 const open = () => { setMenu(false); setBooking(true); };
 return <div className="hp">
  <Seo title="Coaching och mental träning online | Hypnomarck" description="Ett personligt möte med Johannes Stenmarck. Coaching, mental träning och hypnos online, med utrymme för dina frågor och det du vill utforska." path="/" />
  <a className="hp-skip" href="#innehall">Hoppa till innehållet</a>
  <header className="hp-header">
   <Wordmark />
   <nav className="hp-nav" aria-label="Huvudmeny">{navigation.map(([name, id]) => <a key={id} href={'#' + id}>{name}</a>)}</nav>
   <button className="hp-menu" aria-expanded={menu} aria-controls="hp-mobile-menu" onClick={() => setMenu(!menu)}>{menu ? 'Stäng meny' : 'Meny'}</button>
  </header>
  {menu && <nav id="hp-mobile-menu" className="hp-mobile-nav" aria-label="Mobilmeny">{navigation.map(([name, id]) => <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{name}</a>)}</nav>}
  <main id="innehall">
   <section className="hp-hero" aria-labelledby="hero-title">
    <div className="hp-hero-copy">
     <h1 id="hero-title">Coaching & mental träning online</h1>
     <div className="hp-actions"><button className="hp-button" onClick={open}>Boka gratis konsultation</button><a className="hp-text-link" href="#sa-gar-det-till">Så går det till</a></div>
    </div>
    <div className="hp-hero-image"><img src="/background.jpg" alt="En stilla stig genom en grön skog" fetchpriority="high" /></div>
    <a className="hp-explore" href="#for-dig">Utforska i din egen takt <span aria-hidden="true">↓</span></a>
   </section>
   <section className="hp-welcome hp-section" id="for-dig">
    <div className="hp-welcome-copy"><p className="hp-eyebrow">HEJ, JAG ÄR JOHANNES</p><h2>Du behöver inte ha<br/>ett färdigt svar.</h2>
     <p className="hp-lead">Kanske är det något du längtar efter. Kanske ett mönster du börjar bli trött på. Eller bara en känsla av att du vill ge dig själv lite mer utrymme.</p>
     <p>Hos mig får du stanna upp och titta närmare på det. Jag lyssnar, ställer frågor och utforskar tillsammans med dig vad som kan vara ett nästa steg.</p>
     <p>Du behöver inte veta precis var du ska börja. Det kan vi hitta tillsammans.</p>
     <a className="hp-text-link" href="#om-johannes">Lite mer om mig <span aria-hidden="true">↘</span></a>
    </div>
    <figure className="hp-welcome-portrait"><img src="/profile.jpg" alt="Johannes Stenmarck" loading="lazy" width="800" height="1000"/><figcaption><span>Johannes Stenmarck</span>Certifierad hypnoterapeut och coach</figcaption></figure>
   </section>
   <section className="hp-recognition" aria-labelledby="recognition-title"><div className="hp-section hp-recognition-inner">
    <div><p className="hp-eyebrow">DET DU BÄR MED DIG</p><h2 id="recognition-title">Kanske känner<br/>du igen dig.</h2><p>Det behöver inte vara en stor livsfråga. Ibland är det det återkommande i vardagen som man vill förstå lite bättre.</p></div>
    <div className="hp-recognition-stories">
     <article><h3>Du har något att säga.<br/>Men håller det för dig själv.</h3><p>En tanke på mötet. Något du vill säga i en relation. Efteråt tänker du på det som aldrig blev sagt och önskar att du hade vågat.</p></article>
     <article><h3>Du väntar på rätt tillfälle<br/>att börja.</h3><p>Det du vill göra betyder något för dig. Ändå blir det uppskjutet, medan annat får ta plats. Du undrar vad det är som gör steget så svårt.</p></article>
     <article><h3>Du lyssnar på andra.<br/>Och vill kunna höra dig själv också.</h3><p>Du vill känna efter vad du själv behöver, vad du vill säga ja till och vad du vill göra mer plats för.</p></article>
     <p className="hp-recognition-end">Om något av det här känns bekant kan det vara en början på vårt samtal.</p>
    </div>
   </div></section>
   <section className="hp-personal hp-section" id="om-johannes">
    <div><p className="hp-eyebrow">OM MIG OCH VÅRT MÖTE</p><h2>Du möter mig.<br/>Vi utgår från dig.</h2><p className="hp-signoff">Johannes</p></div>
    <div><p className="hp-lead">Jag vill att det ska finnas plats för både det du kan sätta ord på och det som behöver lite mer tid.</p><p>Jag heter Johannes Stenmarck och är certifierad hypnoterapeut och coach, utbildad av Dan och Sara Ahtola på Ahtola Vision. I mitt arbete möts samtal, mental träning och hypnos.</p><p>Vi pratar om vad du vill utforska och om hur vi kan arbeta med det. Jag berättar om metoderna och du får fråga, känna efter och vara med och forma upplägget.</p><p>Vi ses online. Du är på en plats där du känner dig bekväm och kan vara ostörd.</p><p className="hp-scope">Mitt arbete gäller personlig utveckling. Jag har ingen vårdlegitimation och erbjuder inte hälso- och sjukvård.</p></div>
   </section>
   <section className="hp-conversation" id="sa-gar-det-till"><div className="hp-conversation-inner">
    <div className="hp-conversation-heading"><p className="hp-eyebrow">SÅ GÅR DET TILL</p><h2>Först får vi<br/>träffas en stund.</h2><p>Du behöver inte bestämma dig för ett samarbete för att ta kontakt. Ett första samtal är också ett sätt att känna efter.</p></div>
    <div className="hp-conversation-body"><h3>Vi börjar med det du funderar på.</h3><p>Under en gratis konsultation på cirka 30 minuter får du berätta så mycket eller lite du vill. Jag lyssnar, berättar om mitt arbetssätt och svarar på dina frågor.</p><h3>Du får känna efter.</h3><p>Om du vill fortsätta pratar vi om ett upplägg, vad det kostar och vad du vill få ut av våra möten. Du väljer sedan om du vill gå vidare.</p><h3>Vi tar det vidare tillsammans.</h3><p>Under sessionerna arbetar vi med det vi kommit överens om. Vi följer upp vad du tar med dig och vad du vill prova i vardagen.</p><button className="hp-text-link" onClick={() => setPrices(true)}>Läs om sessioner och priser <span aria-hidden="true">↗</span></button></div>
   </div></section>
   <section className="hp-faq hp-section" id="fragor"><div><p className="hp-eyebrow">OM DU FUNDERAR</p><h2>Det finns plats<br/>för dina frågor.</h2><p>Här är några svar att börja med. Du får också fråga mig direkt.</p><button className="hp-text-link" onClick={() => setPrices(true)}>Sessioner och priser <span aria-hidden="true">↗</span></button><Link className="hp-text-link" to="/om-hypnos">Läs mer om hypnos <span aria-hidden="true">↗</span></Link></div><div>{questions.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
   <section className="hp-invitation"><div className="hp-invitation-inner"><p className="hp-eyebrow">NÄR DU VILL</p><h2>Är det något du<br/>vill titta närmare på?</h2><p>Du är välkommen att höra av dig.<br/>Vi kan börja med ett samtal och se vad som tar form där.</p><button className="hp-button" onClick={open}>Boka gratis konsultation</button><a href="mailto:info@hypnomarck.se">Eller skriv till mig på info@hypnomarck.se</a></div></section>
  </main>
  <footer className="hp-footer"><div><Wordmark /></div><div><a href="mailto:info@hypnomarck.se">info@hypnomarck.se</a><a href="https://www.instagram.com/hypnomarck/" target="_blank" rel="noreferrer">Instagram ↗</a><button className="hp-footer-link" onClick={() => setPrices(true)}>Sessioner och priser</button><Link to="/integritet-forhandsversion">Om uppgifter i förhandsversionen</Link></div><small>© {new Date().getFullYear()} Johannes Stenmarck · Coaching och mental träning online</small></footer>
  <div className="hp-preview">Förhandsversion · Prova formuläret – inga uppgifter skickas.</div>
  <BookingModal open={booking} onClose={() => setBooking(false)} />
  <SessionPrices open={prices} onClose={() => setPrices(false)} />
 </div>;
}
