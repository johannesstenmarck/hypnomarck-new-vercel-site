import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BookingModal from '../components/BookingModal.jsx';
import '../preview.css';
import '../atmosphere.css';

const questions = [
 ['Behöver jag veta vad jag vill arbeta med?', 'Nej. Du får gärna komma med en tanke, en fråga eller något du ännu inte riktigt kan sätta ord på. Vi börjar där.'],
 ['Pratar vi i telefon eller via video?', 'För det första samtalet föredrar jag telefon. Du kan också välja Google Meet om det passar dig bättre. Vi kommer överens om en tid via e-post. De fortsatta sessionerna sker online via videosamtal.'],
 ['Behöver jag förbereda något?', 'Inför konsultationen räcker det att hitta en lugn stund där du kan prata ostört. Du behöver inte skriva en beskrivning av privata besvär eller ha färdiga mål. Inför en session får du praktisk information om videosamtalet.'],
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
  <p>Det första samtalet är kostnadsfritt och tar cirka 30 minuter, på telefon eller via Google Meet. Om du vill fortsätta går vi igenom innehåll och pris innan du bestämmer dig.</p>
  <dl>
   <div><dt>Enskild session <span>3 000 kr</span></dt><dd>75–90 minuter online. En individuell session, förinspelad mental träning och uppföljningssamtal.</dd></div>
   <div><dt>Fyra sessioner <span>8 000 kr</span></dt><dd>Fyra individuella möten med mig och fyra förinspelade sessioner för arbete mellan mötena. Uppföljningssamtal ingår. Vi går igenom tider och hur uppföljningen sker innan du väljer upplägg.</dd></div>
  </dl>
  <p className="hp-rates-note">Vi väljer upplägg tillsammans utifrån det du vill arbeta med och följer upp längs vägen.</p>
 </dialog>;
}

function IntroVideo() {
 const [playing, setPlaying] = useState(false);
 return <section className="hp-listen hp-section hp-sheet" id="gratis-introduktion"><div><p className="hp-eyebrow">OM DU ÄR NYFIKEN</p><h2>Lär känna<br/>min röst.</h2><p>En kostnadsfri introduktion till hypnos, där du kan få en känsla för mitt sätt att guida. Välj en lugn stund då du kan lyssna ostört.</p><p className="hp-listen-meta">20 minuter · Frivillig introduktion</p><p>Du behöver inte lyssna först för att ta kontakt.</p></div><div className="hp-video">{playing ? <iframe src="https://www.youtube-nocookie.com/embed/FYSi_FQKrp8?autoplay=1" title="Introduktion till hypnos med Johannes Stenmarck, 20 minuter" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <button className="hp-video-start" onClick={() => setPlaying(true)}><span className="hp-play" aria-hidden="true">▶</span><span>Öppna introduktionen<span>20 minuter · Spelas via YouTube</span></span></button>}</div></section>;
}

export default function HomePreview() {
 const [booking, setBooking] = useState(false);
 const [prices, setPrices] = useState(false);
 const [menu, setMenu] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const menuButton = useRef(null);
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
     <p>Hos mig får du stanna upp och titta närmare på det. Jag lyssnar, ställer frågor och utforskar tillsammans med dig vad som kan vara ett nästa steg.</p>
     <p>Du behöver inte veta precis var du ska börja. Det kan vi hitta tillsammans.</p>
     <a className="hp-text-link" href="#om-johannes">Lite mer om mig <span aria-hidden="true">↘</span></a>
    </div>
    <figure className="hp-welcome-portrait"><img src="/profile.jpg" alt="Johannes Stenmarck" loading="lazy" width="800" height="1000"/><figcaption><span>Johannes Stenmarck</span>Certifierad hypnoterapeut och coach</figcaption></figure>
   </section>
   <section className="hp-recognition hp-sheet" aria-labelledby="recognition-title"><div className="hp-section hp-recognition-inner">
    <div><p className="hp-eyebrow">DET DU BÄR MED DIG</p><h2 id="recognition-title">Kanske känner<br/>du igen dig.</h2><p>Det behöver inte vara en stor livsfråga. Ibland är det det återkommande i vardagen som man vill förstå lite bättre.</p></div>
    <div className="hp-recognition-stories">
     <article><h3>Du har något att säga.<br/>Men håller det för dig själv.</h3><p>En tanke på mötet. Något du vill säga i en relation. Efteråt tänker du på det som aldrig blev sagt och önskar att du hade vågat. Du vill kunna vara mer dig själv, även när andra ser och lyssnar.</p></article>
     <article><h3>Du väntar på rätt tillfälle<br/>att börja.</h3><p>Det du vill göra betyder något för dig. Ändå blir det uppskjutet, medan annat får ta plats. När det blir stilla kan tankarna fortsätta snurra kring allt du borde ha gjort. Du vill förstå mönstret och hitta ett steg som går att ta.</p></article>
     <article><h3>Du lyssnar på andra.<br/>Och vill kunna höra dig själv också.</h3><p>Du märker vad andra behöver och försöker räcka till. Dina egna behov får vänta, och när dagen är slut finns det inte mycket kvar. Du vill känna efter vad du själv behöver och vad du vill säga ja eller nej till.</p></article>
     <p className="hp-recognition-end">Om något av det här känns bekant kan det vara en början på vårt samtal.</p>
    </div>
   </div></section>
   <section className="hp-personal hp-section hp-sheet" id="om-johannes">
    <div><p className="hp-eyebrow">OM MIG OCH VÅRT MÖTE</p><h2>Du möter mig.<br/>Vi utgår från dig.</h2><p className="hp-signoff">Johannes</p></div>
    <div><p className="hp-lead">Jag vill att det ska finnas plats för både det du kan sätta ord på och det som behöver lite mer tid.</p><p>Jag lyssnar på det du berättar och ställer frågor för att förstå hur det ser ut i din vardag. Vi pratar om vad du vill kunna göra, känna eller uttrycka annorlunda.</p><p>Du är med och formar vårt arbete. Jag berättar vad en övning går ut på innan vi börjar, och vi stämmer av hur det känns för dig. Frågor, tvekan och ofärdiga tankar får finnas med.</p><h3>Det finns utrymme för andra sätt.</h3><p>Med samtal, mental träning och hypnos utforskar vi invanda reaktioner och övar på nya sätt att möta situationer i livet. Vi arbetar mot förändringar som du kan ta med dig in i vardagen och fortsätta öva på mellan våra möten.</p><p className="hp-qualification">Jag är certifierad inom Trancemorf Hypnoterapi av Dan och Sara Ahtola på Ahtola Vision.</p><p className="hp-scope">Jag arbetar som certifierad hypnoterapeut och coach med personlig utveckling, utan vårdlegitimation.</p></div>
   </section>
   <IntroVideo />
   <section className="hp-voices hp-section hp-sheet" aria-labelledby="voices-title"><div><p className="hp-eyebrow">EN KLIENTS ERFARENHET</p><h2 id="voices-title">Om att våga<br/>visa mer av sig själv.</h2></div><figure><blockquote>För min del har Johannes hjälpt mig att våga lita på mig själv och visa mer av vem jag är för andra människor. Efter våra möten känner jag mig lugnare, mer fokuserad och mer levande. Jag är gladare och har mer förhoppning om framtiden.</blockquote><figcaption>— Sofia</figcaption><p className="hp-voice-note">Sofias egen beskrivning av våra möten. Ditt arbete utgår från dina erfarenheter och det du vill förändra.</p></figure></section>
   <section className="hp-conversation hp-sheet" id="sa-gar-det-till"><div className="hp-conversation-inner">
    <div className="hp-conversation-heading"><p className="hp-eyebrow">SÅ GÅR DET TILL</p><h2>Först får vi<br/>träffas en stund.</h2><p>Du behöver inte bestämma dig för ett samarbete för att ta kontakt. Ett första samtal är också ett sätt att känna efter.</p></div>
    <div className="hp-conversation-body"><h3>Du skickar en kontaktförfrågan.</h3><p>Lämna namn och e-post och välj telefon eller Google Meet för första samtalet. Jag återkommer via e-post så att vi kan komma överens om en tid. Förfrågan är inte en bekräftad bokning.</p><h3>Vi pratar en stund.</h3><p>Den kostnadsfria konsultationen tar cirka 30 minuter. Jag föredrar telefon för det första samtalet, men du kan välja Google Meet. Du får berätta vad du funderar på och ställa dina frågor.</p><h3>Du får välja fortsättningen.</h3><p>Om du vill gå vidare pratar vi om mål, arbetssätt, innehåll och pris innan du bestämmer dig. De fortsatta sessionerna sker via videosamtal, med utrymme för övning och uppföljning.</p><details className="hp-preparation"><summary>Praktiskt inför vårt samtal <span aria-hidden="true">+</span></summary><p>Välj en lugn stund när du kan prata ostört. För telefonalternativet ringer jag på numret du lämnat, på den tid vi har kommit överens om. Väljer du Google Meet får du en möteslänk när tiden är bestämd.</p><p>Inför en videosession: hitta en bekväm plats, kontrollera ljud, kamera och uppkoppling och hör av dig om du undrar över tekniken. Du behöver inte ha en färdig beskrivning av allt du vill arbeta med.</p></details><button className="hp-text-link" onClick={() => setPrices(true)}>Läs om sessioner och priser <span aria-hidden="true">↗</span></button></div>
   </div></section>
   <section className="hp-faq hp-section hp-sheet" id="fragor"><div><p className="hp-eyebrow">OM DU FUNDERAR</p><h2>Det finns plats<br/>för dina frågor.</h2><p>Här är några svar att börja med. Du får också fråga mig direkt.</p><button className="hp-text-link" onClick={() => setPrices(true)}>Sessioner och priser <span aria-hidden="true">↗</span></button><Link className="hp-text-link" to="/om-hypnos">Läs mer om hypnos <span aria-hidden="true">↗</span></Link></div><div>{questions.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
   <section className="hp-invitation hp-sheet"><div className="hp-invitation-inner"><p className="hp-eyebrow">NÄR DU VILL</p><h2>Är det något du<br/>vill titta närmare på?</h2><p>Du är välkommen att höra av dig.<br/>Vi kan börja med ett samtal och se vad som tar form där.</p><button className="hp-button" onClick={open}>Boka gratis konsultation</button><a href="mailto:info@hypnomarck.se">Eller skriv till mig på info@hypnomarck.se</a></div></section>
  </main>
  <footer className="hp-footer"><div><Wordmark /></div><div><a href="mailto:info@hypnomarck.se">info@hypnomarck.se</a><a href="https://www.instagram.com/hypnomarck/" target="_blank" rel="noreferrer">Instagram ↗</a><button className="hp-footer-link" onClick={() => setPrices(true)}>Sessioner och priser</button><Link to="/integritet-forhandsversion">Om uppgifter i förhandsversionen</Link></div><small>© {new Date().getFullYear()} Johannes Stenmarck · Coaching och mental träning online</small></footer>
  <div className="hp-preview">Förhandsversion · Prova formuläret – inga uppgifter skickas.</div>
  <BookingModal open={booking} onClose={() => setBooking(false)} />
  <SessionPrices open={prices} onClose={() => setPrices(false)} />
 </div>;
}
