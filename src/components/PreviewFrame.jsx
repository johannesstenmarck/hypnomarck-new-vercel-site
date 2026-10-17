import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal.jsx';
import '../preview.css';
import '../atmosphere.css';

export function PreviewWordmark() {
  return <Link to="/" className="hp-brand hp-lockup" aria-label="Hypnomarck, startsida"><span className="hp-brand-text"><span className="hp-wordmark">hypnomarck</span><span className="hp-tagline">Förändring börjar under ytan</span></span></Link>;
}

export default function PreviewFrame({ children }) {
  const [booking, setBooking] = useState(false);
  const [menu, setMenu] = useState(false);
  const menuButton = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {window.scrollTo(0, 0); setMenu(false);}, [pathname]);
  useEffect(() => {
    if (!menu) return;
    const escape = event => {if (event.key === 'Escape') {setMenu(false); menuButton.current?.focus();}};
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [menu]);
  const links = [['Hem', '/'], ['Om Johannes', '/om-mig'], ['Så går det till', '/hypnoterapi-online'], ['Frågor & priser', '/#fragor']];
  const renderLinks = () => links.map(([label, to]) => <Link key={to} to={to} onClick={() => setMenu(false)} aria-current={pathname === to ? 'page' : undefined}>{label}</Link>);
  return <div className="hp hp-subpage">
    <a className="hp-skip" href="#innehall">Hoppa till innehållet</a>
    <header className="hp-header hp-header-scrolled"><PreviewWordmark/><nav className="hp-nav" aria-label="Huvudmeny">{renderLinks()}</nav><button ref={menuButton} className="hp-menu" aria-controls="hp-page-menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? 'Stäng meny' : 'Meny'}</button></header>
    {menu && <nav id="hp-page-menu" className="hp-mobile-nav hp-mobile-nav-scrolled" aria-label="Mobilmeny">{renderLinks()}</nav>}
    <main id="innehall">{children({openBooking:() => setBooking(true)})}</main>
    <footer className="hp-footer"><PreviewWordmark/><div><a href="mailto:info@hypnomarck.se">info@hypnomarck.se</a><Link to="/#priser">Sessioner och priser</Link><a href="https://www.instagram.com/hypnomarck/" target="_blank" rel="noreferrer">Instagram ↗</a><Link to="/integritet-forhandsversion">Om uppgifter i förhandsversionen</Link></div><small>© {new Date().getFullYear()} Johannes Stenmarck · Hypnoterapeut och Coach</small></footer>
    <div className="hp-preview">Förhandsversion · Prova formuläret – inga uppgifter skickas.</div>
    <BookingModal open={booking} onClose={() => setBooking(false)}/>
  </div>;
}
