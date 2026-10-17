import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BookingModal from '../components/BookingModal.jsx';
import IntroVideo from '../components/IntroVideo.jsx';
import SessionOptions from '../components/SessionOptions.jsx';
import { availability, testimonials } from '../content/practice.js';
import '../preview.css';
import '../atmosphere.css';

const questions = [
 ['Behöver jag veta vad jag vill arbeta med?', 'Nej. Du får gärna komma med en tanke, en fråga eller något du ännu inte riktigt kan sätta ord på. Vi börjar där.'],
 ['Pratar vi i telefon eller via video?', 'För det första samtalet föredrar jag telefon. Du kan också välja Google Meet om det passar dig bättre. Vi kommer överens om en tid via e-post. De fortsatta sessionerna sker online via videosamtal.'],
 ['Behöver jag förbereda något?', 'Inför konsultationen räcker det att hitta en lugn stund där du kan prata ostört. Du behöver inte skriva en beskrivning av privata besvär eller ha färdiga mål. Inför en session får du praktisk information om videosamtalet.'],
 ['Måste jag bestämma mig efter första samtalet?', 'Nej. Konsultationen är till för att vi ska få träffas och för att du ska kunna ställa frågor. Efteråt får du känna efter om du vill gå vidare.'],
 ['Vad händer om jag inte hittar orden?', 'Det är okej. Du behöver inte komma med ett färdigt svar. Vi kan stanna upp och utforska hur det känns, också i kroppen, och se vad som blir tydligare. Du väljer själv hur mycket du vill berätta.'],
 ['Kan jag pausa eller säga nej?', 'Ja. Du får säga nej, byta riktning, pausa eller avsluta en övning. Jag anpassar guidningen efter dig och pushar aldrig. Du behöver inte dela privata detaljer för att vi ska kunna arbeta tillsammans.'],
 ['Passar ditt arbetssätt det jag behöver?', 'Det pratar vi om under konsultationen. Mitt arbete gäller coaching och personlig utveckling med hypnos som verktyg. Om du behöver annan hjälp än den jag kan erbjuda säger jag det och rekommenderar en relevant vårdgivare eller annan professionell. Arbetet ersätter inte psykiatrisk eller medicinsk vård.']
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
  <SessionOptions/>
 </dialog>;
}

function ClientVoices() {
 const [first, ...more] = testimonials;
 const quote = person => <figure><blockquote>{person.text}</blockquote><figcaption>— {person.name}<span>Hypnoterapi och coaching · <time dateTime={person.dateTime}>{person.date}</time></span></figcaption></figure>;
 return <section className="hp-voices hp-section hp-sheet" aria-labelledby="voices-title"><div><p className="hp-eyebrow">PERSONLIGA ERFARENHETER</p><h2 id="voices-title">Ord från dem<br/>jag har mött.</h2></div><div>{quote(first)}{more.map(person => <details className="hp-more-voice hp-reading-details" key={person.name}><summary>Läs {person.name === 'Kevin' ? 'Kevins' : 'Eva- Lottes'} ord <span aria-hidden="true">+</span></summary>{quote(person)}</details>)}<p className="hp-voice-note">Orden beskriver deras egna upplevelser av våra möten.</p></div></section>;
}

export default function HomePreview() {
 const [booking, setBooking] = useState(false);
 const [prices, setPrices] = useState(false);
 const [menu, setMenu] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const menuButton = useRef(null);
 const { hash } = useLocation();
 useEffect(() => {
  if (hash === '#priser' || hash === '#pricing') { setPrices(true); return; }
  if (['#for-dig', '#om-johannes', '#sa-gar-det-till', '#fragor', '#gratis-introduktion'].includes(hash)) {
   const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
   return () => cancelAnimationFrame(frame);
  }
 }, [hash]);
 useEffect(() => {
  const update = () => setScrolled(window.scrollY > Math.max(100, window.innerHeight - 100));
  update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
  return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
 }, []);
 useEffect(() => {
  if (!menu) return;
  const escape = e => { if (e.key === 'Escape') { setMenu(false); menuButton.current?.focus(); } };
  document.addEventListener('keydown', escape); return () => document.removeEventListener('keydown', escape);
 }, [menu]);
 const open = () => { setMenu(false); setBooking(true); };
 return <div className="hp">
  <Seo title="Coaching och mental träning online | Hypnomarck" description="Ett personligt möte med Johannes Stenmarck. Coaching, mental träning och hypnos online, med utrymme för dina frågor och det du vill utforska." path="/" />
  <a className="hp-skip" href="#innehall">Hoppa till innehållet</a>
  <header className={'hp-header' + (scrolled ? ' hp-header-scrolled' : '')}>
   <Wordmark />
   <nav className="hp-nav" aria-label="Huvudmeny">{navigation.map(([name, id]) => <a key={id} href={'#' + id}>{name}</a>)}</nav>
   <button ref={menuButton} className="hp-menu" aria-expanded={menu} aria-controls="hp-mobile-menu" onClick={() => setMenu(!menu)}>{menu ? 'Stäng meny' : 'Meny'}</button>
  </header>
  {menu && <nav id="hp-mobile-menu" className={'hp-mobile-nav' + (scrolled ? ' hp-mobile-nav-scrolled' : '')} aria-label="Mobilmeny">{navigation.map(([name, id]) => <a key={id} href={'#' + id} onClick={() => setMenu(false)}>{name}</a>)}</nav>}
  <main id="innehall">
   <section className="hp-hero" aria-labelledby="hero-title">
    <div className="hp-hero-copy">
     <h1 id="hero-title">Coaching & mental träning online</h1>
     <div className="hp-actions"><button className="hp-button" onClick={open}>Boka gratis konsultation</button><a className="hp-text-link" href="#sa-gar-det-till">Så går det till</a></div>
    </div>
    <div className="hp-hero-image"><img src="/background.jpg" alt="En stilla stig genom en grön skog" fetchpriority="high" /></div>
    <a className="hp-explore" href="#for-dig">Utforska i din egen takt <span aria-hidden="true">↓</span></a>
   </section>
   <section className="hp-welcome hp-section hp-sheet" id="for-dig">
    <div className="hp-welcome-copy"><p className="hp-eyebrow">HEJ, JAG ÄR JOHANNES</p><h2>Du behöver inte ha<br/>ett färdigt svar.</h2>
     <p className="hp-lead">Kanske är det något du längtar efter. Kanske ett mönster du börjar bli trött på. Eller bara en känsla av att du vill ge dig själv lite mer utrymme.</p>
     <p>Jag heter Johannes Stenmarck och är hypnoterapeut och coach. Hos mig får du stanna upp och utforska det som känns begränsande, och vad du vill ge mer plats åt i ditt liv.</p>
     <p>Jag brukar börja med att fråga: ”Vad har gjort att du har tagit kontakt med mig?” Resten tar vi därifrån. Du får vara precis där du är.</p>
     <a className="hp-text-link" href="#om-johannes">Lite mer om mig <span aria-hidden="true">↘</span></a>
    </div>
    <figure className="hp-welcome-portrait"><img src="/profile.jpg" alt="Johannes Stenmarck" loading="lazy" width="800" height="1000"/><figcaption><span>Johannes Stenmarck</span>Hypnoterapeut och Coach</figcaption></figure>
   </section>
   <section className="hp-recognition hp-sheet" aria-labelledby="recognition-title"><div className="hp-section hp-recognition-inner">
    <div><p className="hp-eyebrow">DET DU BÄR MED DIG</p><h2 id="recognition-title">Kanske känner<br/>du igen dig.</h2><p>Det behöver inte vara en stor livsfråga. Ibland är det det återkommande i vardagen som man vill förstå lite bättre.</p></div>
    <div className="hp-recognition-stories">
     <article><h3>Du scrollar vidare.<br/>Fast du längtar efter något annat.</h3><p>Du skulle vilja prova något, men vet inte riktigt vad. Eller så tvivlar du på om du kan. Telefonen blir kvar i handen, och ännu en kväll går utan att du kommer närmare det du längtar efter.</p></article>
     <article><h3>Du väntar på rätt tillfälle<br/>att börja.</h3><p>Det där du vill göra finns kvar i tankarna. Du skjuter det framför dig, fast det betyder något. Ibland gnager det mest att du inte ger dig själv chansen att upptäcka vad som skulle kunna hända.</p></article>
     <article><h3>Du ger andra plats.<br/>Och håller inne med ditt eget.</h3><p>En tanke på mötet. Något du vill säga i en relation. Du känner av vad andra behöver och låter dina egna behov vänta. Efteråt tänker du på det som aldrig blev sagt och önskar att du hade vågat.</p></article>
     <p className="hp-recognition-end">Om något av det här känns bekant kan det vara en början på vårt samtal.</p>
    </div>
   </div></section>
   <section className="hp-personal hp-section hp-sheet" id="om-johannes">
    <div><p className="hp-eyebrow">MÄNNISKAN DU MÖTER</p><h2>Nyfiken på det<br/>som finns inom oss.</h2><p className="hp-signoff">Johannes</p></div>
    <div><p className="hp-lead">Jag har varit skådespelare i över 20 år. Människans inre, och allt vi ännu inte har gett uttryck för, har fascinerat mig minst lika länge.</p><p>Min egen erfarenhet av hypnos blev en vändpunkt. Ett mönster jag länge burit med mig i relationer fick ett annat perspektiv. Det mötet med min lärare Dan Ahtola väckte viljan att själv utbilda mig och arbeta med andra.</p><p>I våra möten tar jag med mig den nyfikenheten. Jag vill förstå vad just du upplever, lyssna efter det som känns viktigt och ge plats åt det som ännu inte har hittat sina ord.</p><p className="hp-personal-detail">Utanför arbetet tycker jag om astrologi och tarot, Ninja Turtles och Star Wars, och japansk och kinesisk stridskonst.</p><p className="hp-qualification">Utbildad inom Trancemorf Hypnoterapi via Dan och Sara Ahtola på Ahtola Vision.</p><Link className="hp-text-link" to="/om-mig">Mer om min väg hit <span aria-hidden="true">↗</span></Link></div>
   </section>
   <section className="hp-method hp-personal hp-section hp-sheet" aria-labelledby="method-title">
    <div><p className="hp-eyebrow">SÅ ARBETAR JAG</p><h2 id="method-title">Vi utgår från dig.<br/>Du är med hela vägen.</h2></div>
    <div><p className="hp-lead">Samtal, hypnos och mental träning hänger ihop. Vi försöker förstå det du upplever, utforska nya perspektiv och ge dem plats i din vardag.</p><h3>Vi börjar med att lyssna.</h3><p>Vad är det som känns begränsande? När märker du av det, och hur skulle du vilja att det var i stället? Tillsammans hittar vi ett fokus som känns rätt och meningsfullt för dig. Att inte veta är också en plats att börja på.</p><h3>Du får utforska, i din takt.</h3><p>Under hypnosen guidar jag med frågor, föreställningar och förslag. Du riktar uppmärksamheten inåt och utforskar det som dyker upp: känslor, bilder, tankar eller förnimmelser i kroppen. Du behöver inte prestera eller uppleva något särskilt.</p><p>Du väljer hur mycket du vill berätta. Vi kan arbeta utan att du delar privata detaljer. Du får säga nej, byta riktning, pausa eller avsluta. Jag pushar aldrig.</p><h3>Det vi upptäcker får följa med hem.</h3><p>Med inspelningar på ungefär 20–30 minuter får du fortsätta öva mellan träffarna. Vi följer upp hur det fungerar i vardagen och vad du behöver för att ta hand om förändringen. Jag bidrar med stöd och guidning; du deltar i ditt eget förändringsarbete.</p><Link className="hp-text-link" to="/hypnoterapi-online">Mer om våra möten <span aria-hidden="true">↗</span></Link></div>
   </section>
   <IntroVideo />
   <ClientVoices/>
   <section className="hp-conversation hp-sheet" id="sa-gar-det-till"><div className="hp-conversation-inner">
    <div className="hp-conversation-heading"><p className="hp-eyebrow">SÅ GÅR DET TILL</p><h2>Först får vi<br/>träffas en stund.</h2><p>Du behöver inte bestämma dig för ett samarbete för att ta kontakt. Ett första samtal är också ett sätt att känna efter.</p></div>
    <div className="hp-conversation-body"><h3>Du skickar en kontaktförfrågan.</h3><p>Lämna namn och e-post och välj telefon eller Google Meet. Jag återkommer personligen via e-post med förslag på en tid. Förfrågan är inte en bekräftad bokning.</p><h3>Vi pratar en stund.</h3><p>Konsultationen är kostnadsfri och tar 30 minuter. Jag föredrar telefon, men du kan välja Google Meet. Vi pratar om det du vill arbeta med, vad ett meningsfullt mål skulle vara och om mitt arbetssätt passar dig.</p><h3>Du får välja fortsättningen.</h3><p>Om vi vill arbeta tillsammans går vi igenom upplägg och pris. Vi kan boka den första sessionen under samtalet eller hitta en tid via e-post efteråt. Varje session är 90 minuter online.</p><p className="hp-availability">{availability}</p><details className="hp-preparation"><summary>Praktiskt inför vårt samtal <span aria-hidden="true">+</span></summary><p>Välj en lugn stund när du kan prata ostört. För telefonalternativet ringer jag på numret du lämnat, på den tid vi har kommit överens om. Väljer du Google Meet får du en möteslänk när tiden är bestämd.</p><p>Inför en videosession: hitta en bekväm plats, kontrollera ljud, kamera och uppkoppling och hör av dig om du undrar över tekniken. Du behöver inte ha en färdig beskrivning av allt du vill arbeta med.</p></details><button className="hp-text-link" onClick={() => setPrices(true)}>Läs om sessioner och priser <span aria-hidden="true">↗</span></button></div>
   </div></section>
   <section className="hp-faq hp-section hp-sheet" id="fragor"><div><p className="hp-eyebrow">OM DU FUNDERAR</p><h2>Det finns plats<br/>för dina frågor.</h2><p>Här är några svar att börja med. Du får också fråga mig direkt.</p><button id="priser" className="hp-text-link" onClick={() => setPrices(true)}>Sessioner och priser <span aria-hidden="true">↗</span></button><Link className="hp-text-link" to="/om-hypnos">Läs mer om hypnos <span aria-hidden="true">↗</span></Link></div><div>{questions.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
   <section className="hp-invitation hp-sheet"><div className="hp-invitation-inner"><p className="hp-eyebrow">NÄR DU VILL</p><h2>Är det något du<br/>vill titta närmare på?</h2><p>Du är välkommen att höra av dig.<br/>Vi kan börja med ett samtal och se vad som tar form där.</p><button className="hp-button" onClick={open}>Boka gratis konsultation</button><a href="mailto:info@hypnomarck.se">Eller skriv till mig på info@hypnomarck.se</a></div></section>
  </main>
  <footer className="hp-footer"><div><Wordmark /></div><div><a href="mailto:info@hypnomarck.se">info@hypnomarck.se</a><a href="https://www.instagram.com/hypnomarck/" target="_blank" rel="noreferrer">Instagram ↗</a><button className="hp-footer-link" onClick={() => setPrices(true)}>Sessioner och priser</button><Link to="/integritet-forhandsversion">Om uppgifter i förhandsversionen</Link></div><small>© {new Date().getFullYear()} Johannes Stenmarck · Coaching och mental träning online</small></footer>
  <div className="hp-preview">Förhandsversion · Prova formuläret – inga uppgifter skickas.</div>
  <BookingModal open={booking} onClose={() => setBooking(false)} />
  <SessionPrices open={prices} onClose={() => setPrices(false)} />
 </div>;
}
