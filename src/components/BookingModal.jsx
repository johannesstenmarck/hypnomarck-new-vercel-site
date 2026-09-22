import { useState, useEffect, useRef } from 'react';
import '../preview.css';
export default function BookingModal({ open, onClose }) {
 const dialog=useRef(null);
 const [phase,setPhase]=useState('form');
 useEffect(()=>{if(!open)return;setPhase('form');const previous=document.activeElement;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.current?.querySelector('input')?.focus();return()=>{document.body.style.overflow=overflow;previous?.focus();};},[open]);
 useEffect(()=>{if(open){(dialog.current?.querySelector('input')||dialog.current?.querySelector('.hb-close'))?.focus();}},[open,phase]);
 if(!open)return null;
 const onKeyDown=e=>{if(e.key==='Escape'){e.preventDefault();onClose();}if(e.key==='Tab'){const els=[...dialog.current.querySelectorAll('button,input,select,a,summary')].filter(el=>el.getClientRects().length&&!el.disabled);const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};
 return <div className="hb-backdrop" onClick={e=>{if(e.target===e.currentTarget)onClose();}}><section ref={dialog} className="hb-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title" aria-describedby="booking-preview" onKeyDown={onKeyDown}>
  <div className="hb-heading"><div><p className="hb-eyebrow">ETT FÖRSTA SAMTAL</p><h2 id="booking-title">Boka gratis konsultation</h2></div><button className="hb-close" type="button" aria-label="Stäng konsultationsformuläret" onClick={onClose}>×</button></div>
  <p id="booking-preview" className="hb-preview">Förhandsversion: använd gärna testuppgifter. Ingenting skickas eller sparas.</p>
  {phase==='thanks'?<div className="hb-success" role="status"><h3>Så här avslutas din förfrågan.</h3><p>I den färdiga tjänsten får du en bekräftelse på att förfrågan tagits emot. Johannes kontaktar dig sedan via e-post för att komma överens om en tid.</p><p><strong>Detta var ett test. Ingen förfrågan har skickats och ingen tid är bokad.</strong></p><button className="hb-submit" onClick={onClose}>Stäng förhandsvisningen</button></div>:<><p>30 minuter online, utan kostnad. Vi pratar om dina mål och om mitt arbetssätt passar dig.</p>
  <form onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);if(!String(data.get('name')).trim()){e.currentTarget.elements.name.setCustomValidity('Skriv ditt namn.');e.currentTarget.elements.name.reportValidity();return;}setPhase('thanks');dialog.current.querySelector('.hb-close')?.focus();}}>
   <div className="hb-grid"><div><label htmlFor="booking-name">Namn *</label><input id="booking-name" name="name" autoComplete="name" maxLength={100} required onInput={e=>e.target.setCustomValidity('')}/></div><div><label htmlFor="booking-email">E-post *</label><input id="booking-email" name="email" type="email" autoComplete="email" maxLength={254} required/></div></div>
   <details><summary>Lägg till telefon eller önskemål om tid (valfritt)</summary><label htmlFor="booking-phone">Telefon (valfritt)</label><input id="booking-phone" name="phone" type="tel" autoComplete="tel" maxLength={30}/><label htmlFor="booking-times">När passar det bäst? (valfritt)</label><select id="booking-times" name="preferredTimes" defaultValue=""><option value="">Jag är flexibel</option><option>Vardagar, förmiddag</option><option>Vardagar, eftermiddag</option><option>Vardagar, kväll</option></select></details>
   <p className="hb-privacy">Du behöver inte beskriva privata besvär här. <a href="/integritet-forhandsversion" target="_blank" rel="noreferrer">Så hanteras uppgifter i förhandsversionen (ny flik)</a>.</p><button className="hb-submit" type="submit">Skicka konsultationsförfrågan ↗</button><p>Du skickar en förfrågan om kontakt. En tid bokas först när vi har kommit överens.</p>
  </form></>}
 </section></div>;
}
