import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import BookingModal from '../components/BookingModal.jsx';
import '../preview.css';
import '../atmosphere.css';

const questions = [
 ['Behöver jag veta vad jag vill arbeta med?', 'Nej. Vi börjar med ett samtal om vad du vill förändra i din vardag och vad du hoppas få ut av ett samarbete. Du behöver inte ha ett färdigt svar.'],
 ['Hur går ett möte online till?', 'Vi ses via videosamtal. Välj en lugn plats där du kan vara ostörd och använd en stabil internetanslutning. Du får praktisk information när vi har bestämt en tid.'],
 ['Vad innebär hypnos i ditt arbetssätt?', 'Hypnos används som en metod för fokuserad uppmärksamhet och guidade övningar. Vi pratar om upplägget innan vi börjar. Upplevelser och resultat varierar, och du kan be om en paus eller avsluta.'],
 ['Hur många sessioner behöver jag?', 'Det beror på dina mål och förutsättningar. Vi pratar om ett rimligt upplägg under konsultationen och följer upp längs vägen. Ett visst resultat eller antal sessioner kan inte garanteras.'],
 ['Är detta hälso- och sjukvård?', 'Nej. Jag är certifierad hypnoterapeut och coach, inte legitimerad vårdpersonal. Erbjudandet gäller coaching, mental träning och personlig utveckling. Det ersätter inte medicinsk eller psykologisk bedömning och behandling.']
];
export default function HomePreview() {
 const [booking, setBooking] = useState(false);
 const [menu, setMenu] = useState(false);
 const open = () => {setMenu(false); setBooking(true);};
 return <div className="hp">
  <Seo title="Coaching och mental träning online | Hypnomarck" description="Ta mer plats, stärk din självtillit och hitta vägen till handling. Coaching och mental träning online med Johannes Stenmarck." path="/" />
  <a className="hp-skip" href="#innehall">Hoppa till innehållet</a>

  <header className="hp-header">
   <a href="#" className="hp-brand hp-lockup" aria-label="Hypnomarck – Förändring börjar under ytan. Startsida"><img src="/android-chrome-512x512.png" alt="" width="70" height="70"/><span className="hp-brand-text"><span className="hp-wordmark">hypnomarck</span><span className="hp-tagline">Förändring börjar under ytan.</span></span></a>
   <nav className="hp-nav" aria-label="Huvudmeny"><a href="#for-dig">För dig</a><a href="#sa-gar-det-till">Så går det till</a><a href="#om-johannes">Om Johannes</a><a href="#sessioner">Sessioner</a></nav>
   <button className="hp-button hp-small hp-header-cta" onClick={open}>Boka gratis konsultation <span aria-hidden="true">↗</span></button>
   <button className="hp-menu" aria-expanded={menu} aria-controls="hp-mobile-menu" onClick={()=>setMenu(!menu)}>{menu ? 'Stäng meny' : 'Meny'}</button>
  </header>
  {menu && <nav id="hp-mobile-menu" className="hp-mobile-nav" aria-label="Mobilmeny">{[['För dig','for-dig'],['Så går det till','sa-gar-det-till'],['Om Johannes','om-johannes'],['Sessioner','sessioner']].map(([name,id])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{name}</a>)}<button className="hp-button" onClick={open}>Boka gratis konsultation</button></nav>}
  <main id="innehall">
   <section className="hp-hero">
    <div className="hp-hero-copy"><p className="hp-eyebrow">COACHING & MENTAL TRÄNING ONLINE</p><h1>Från självtvivel<br/>till mer <em>handlingsutrymme.</em></h1><p className="hp-lead">Du vet vad du vill. Ändå kan steget dit kännas långt.</p><p>Jag hjälper dig att utforska det som håller dig tillbaka och arbeta mot det du vill göra mer plats för i livet.</p><div className="hp-actions"><button className="hp-button" onClick={open}>Boka gratis konsultation <span aria-hidden="true">↗</span></button><a className="hp-text-link" href="#sa-gar-det-till">Så går det till <span aria-hidden="true">↓</span></a></div><p className="hp-note">30 minuter · Online · Kostnadsfritt första samtal</p></div>
    <div className="hp-hero-image"><img src="/background.jpg" alt="En stilla stig genom en grön skog" fetchpriority="high"/></div><a className="hp-explore" href="#for-dig">Utforska i din egen takt <span aria-hidden="true">↓</span></a>
   </section>
   <div className="hp-intro"><img src="/profile.jpg" alt="Johannes Stenmarck"/><div><p>Johannes Stenmarck</p><span>Certifierad hypnoterapeut och coach</span></div><a href="#om-johannes">Lär känna mig ↗</a></div>
   <section className="hp-section" id="for-dig"><div className="hp-section-heading"><p className="hp-eyebrow">KÄNNER DU IGEN DIG?</p><h2>När du vill framåt,<br/>men håller dig tillbaka.</h2><p>Vi utgår från din vardag och det du vill kunna göra annorlunda.</p></div><div className="hp-three">
    <article><span className="hp-number">01</span><h3>Våga ta plats</h3><p>Du vill uttrycka en idé, stå inför andra eller visa mer av dig själv – utan att självtvivlet får styra varje steg.</p></article>
    <article><span className="hp-number">02</span><h3>Komma till handling</h3><p>Du skjuter upp sådant som betyder något för dig. Du vill förstå dina vanor och hitta ett första steg som går att ta.</p></article>
    <article><span className="hp-number">03</span><h3>Stärka din självtillit</h3><p>Du vill lyssna mer på dig själv, göra medvetna val och ge dina egna behov och ambitioner större utrymme.</p></article>
   </div></section>
   <section className="hp-process" id="sa-gar-det-till"><div><p className="hp-eyebrow">ETT STEG I TAGET</p><h2>Vi börjar med<br/>ett samtal.</h2><p>Du behöver inte bestämma dig för ett helt upplägg från början. Först undersöker vi om vi passar att arbeta tillsammans.</p><button className="hp-button hp-light" onClick={open}>Hitta ditt första steg ↗</button></div><ol>{[['Vi pratar om dina mål','Under en gratis konsultation på cirka 30 minuter får du berätta vad du söker och ställa dina frågor.'],['Vi väljer ett upplägg','Om vi går vidare kommer vi överens om mål och arbetssätt. Samtal, mental träning och hypnos kan ingå.'],['Vi följer upp i vardagen','Vi pratar om vad du tar med dig från sessionerna och hur du vill omsätta det i handling.']].map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
   <section className="hp-about hp-section" id="om-johannes"><div className="hp-portrait"><img src="/profile.jpg" alt="Johannes Stenmarck, certifierad hypnoterapeut och coach" loading="lazy"/></div><div><p className="hp-eyebrow">MÄNNISKAN BAKOM HYPNOMARCK</p><h2>Hej, jag är Johannes.</h2><p className="hp-lead">Jag vill skapa utrymme för dig att utforska vad du vill – och vad som står i vägen.</p><p>Jag är certifierad inom Hypnoterapi 2.0 av Dan och Sara Ahtola på Ahtola Vision. I mitt arbete möts samtal, mental träning och hypnos, med dina mål som utgångspunkt.</p><p>Vi ses online, i ett personligt möte där det finns plats för frågor och eftertanke.</p><div className="hp-boundary"><strong>Tydliga ramar, från början.</strong><p>Jag är inte legitimerad vårdpersonal. Mitt erbjudande gäller personlig utveckling och ersätter inte hälso- och sjukvård.</p></div><Link className="hp-text-link" to="/om-mig">Mer om min bakgrund ↗</Link></div></section>
   <section className="hp-section hp-pricing" id="sessioner"><div className="hp-section-heading"><p className="hp-eyebrow">SESSIONER & UPPLÄGG</p><h2>Börja där du är.</h2><p>Första samtalet är gratis. Vi pratar om vad som kan passa innan du väljer ett betalt upplägg.</p></div><div className="hp-three">
    <article><p className="hp-eyebrow">FÖRSTA STEGET</p><h3>Gratis konsultation</h3><p className="hp-price">0 kr</p><p>30 minuter online</p><ul><li>Prata om dina mål</li><li>Ställ dina frågor</li><li>Utforska om vi passar ihop</li></ul><button className="hp-button" onClick={open}>Boka gratis konsultation</button></article>
    <article><p className="hp-eyebrow">ETT FOKUSERAT MÖTE</p><h3>Enskild session</h3><p className="hp-price">3 000 kr</p><p>75–90 minuter online</p><ul><li>En individuell session</li><li>Förinspelad mental träning</li><li>Uppföljningssamtal</li></ul><button className="hp-button hp-outline" onClick={open}>Prata om upplägget</button></article>
    <article><p className="hp-eyebrow">UTRYMME ÖVER TID</p><h3>Fyra sessioner</h3><p className="hp-price">8 000 kr</p><p>Ett sammanhängande upplägg</p><ul><li>Fyra individuella sessioner</li><li>Fyra förinspelade sessioner</li><li>Uppföljningssamtal</li></ul><button className="hp-button hp-outline" onClick={open}>Prata om upplägget</button></article>
   </div></section>
   <section className="hp-faq hp-section" id="fragor"><div><p className="hp-eyebrow">INFÖR VÅRT FÖRSTA SAMTAL</p><h2>Det är okej<br/>att ha frågor.</h2><Link className="hp-text-link" to="/om-hypnos">Läs mer om hypnos ↗</Link></div><div>{questions.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
   <section className="hp-final"><p className="hp-eyebrow">DITT NÄSTA STEG</p><h2>Vad vill du göra<br/>mer plats för?</h2><p>Vi börjar med ett kostnadsfritt samtal om dig och dina mål.</p><button className="hp-button hp-light" onClick={open}>Boka gratis konsultation ↗</button><span>30 minuter online. Du väljer sedan hur du vill gå vidare.</span></section>
  </main>
  <footer className="hp-footer"><div><a href="#" className="hp-brand hp-lockup" aria-label="Hypnomarck – Förändring börjar under ytan. Startsida"><img src="/android-chrome-512x512.png" alt="" width="70" height="70"/><span className="hp-brand-text"><span className="hp-wordmark">hypnomarck</span><span className="hp-tagline">Förändring börjar under ytan.</span></span></a></div><div><a href="mailto:info@hypnomarck.se">info@hypnomarck.se</a><a href="https://www.instagram.com/hypnomarck/" target="_blank" rel="noreferrer">Instagram ↗</a><Link to="/integritet-forhandsversion">Om uppgifter i förhandsversionen</Link></div><small>© {new Date().getFullYear()} Johannes Stenmarck · Coaching och mental träning online</small></footer>
  <div className="hp-preview">Förhandsversion · Prova formuläret – inga uppgifter skickas.</div>
  <BookingModal open={booking} onClose={()=>setBooking(false)} />
 </div>;
}
