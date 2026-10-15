import { useState, useEffect, useRef } from 'react';
import '../preview.css';
export default function BookingModal({ open, onClose }) {
 const dialog = useRef(null);
 const [phase, setPhase] = useState('form');
 const [channel, setChannel] = useState('phone');
 useEffect(() => {
  if (!open) return;
  setPhase('form'); setChannel('phone');
  const previous = document.activeElement;
  const overflow = document.body.style.overflow;
  const node = dialog.current;
  document.body.style.overflow = 'hidden';
  node.showModal();
  node.querySelector('input[name="name"]')?.focus();
  return () => { node.close(); document.body.style.overflow = overflow; previous?.focus(); };
 }, [open]);
 useEffect(() => { if (open && phase === 'thanks') dialog.current?.querySelector('.hb-success')?.focus(); }, [open, phase]);
 if (!open) return null;
 const keepFocus = e => {
  if (e.key !== 'Tab') return;
  const items = [...dialog.current.querySelectorAll('button,input,select,a,summary')].filter(el => el.getClientRects().length && !el.disabled);
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
 };
 return <dialog ref={dialog} className="hb-dialog" aria-modal="true" aria-labelledby="booking-title" aria-describedby="booking-preview" onKeyDown={keepFocus} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { const r = e.currentTarget.getBoundingClientRect(); if (e.target === e.currentTarget && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) onClose(); }}>
  <div className="hb-heading"><div><p className="hb-eyebrow">ETT FÖRSTA SAMTAL</p><h2 id="booking-title">Boka gratis konsultation</h2></div><button className="hb-close" type="button" aria-label="Stäng konsultationsformuläret" onClick={onClose}>×</button></div>
  <p id="booking-preview" className="hb-preview">Förhandsversion: ingenting skickas eller sparas.</p>
  {phase === 'thanks' ? <div className="hb-success" role="status" tabIndex={-1}><h3>Så här avslutas din förfrågan.</h3><p>I den färdiga tjänsten visas en mottagningsbekräftelse. Därefter återkommer Johannes via e-post för att komma överens om tid för det kontaktalternativ du valt.</p><p>Detta var ett test. Ingen förfrågan har skickats och ingen tid är bokad.</p><button className="hb-submit" onClick={onClose}>Stäng förhandsvisningen</button></div> : <>
  <p className="hb-introduction">Cirka 30 minuter, utan kostnad. Lämna dina kontaktuppgifter så kommer vi överens om en tid via e-post.</p>
  <form onSubmit={e => { e.preventDefault(); const data = new FormData(e.currentTarget); if (!String(data.get('name')).trim()) { e.currentTarget.elements.name.setCustomValidity('Skriv ditt namn.'); e.currentTarget.elements.name.reportValidity(); return; } if (channel === 'phone' && !String(data.get('phone')).trim()) { e.currentTarget.elements.phone.setCustomValidity('Ange ett telefonnummer eller välj Google Meet.'); e.currentTarget.elements.phone.reportValidity(); return; } setPhase('thanks'); }}>
   <div className="hb-grid"><div><label htmlFor="booking-name">Namn *</label><input id="booking-name" name="name" autoComplete="name" maxLength={100} required onInput={e => e.target.setCustomValidity('')} /></div><div><label htmlFor="booking-email">E-post *</label><input id="booking-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div></div>
   <fieldset className="hb-channel"><legend>Hur vill du ha första samtalet?</legend><div><label><input type="radio" name="contactMethod" value="phone" checked={channel === 'phone'} onChange={() => setChannel('phone')} />Telefon</label><label><input type="radio" name="contactMethod" value="meet" checked={channel === 'meet'} onChange={() => setChannel('meet')} />Google Meet</label></div></fieldset>
   {channel === 'phone' ? <div><label htmlFor="booking-phone">Telefonnummer *</label><input id="booking-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} required onInput={e => e.target.setCustomValidity('')} /><p className="hb-channel-note">Jag föredrar telefon för första samtalet. Jag ringer på den tid vi har kommit överens om.</p></div> : <p className="hb-channel-note">Du behöver inte ange telefonnummer. Du får en möteslänk när vi har bestämt en tid.</p>}
   <details><summary>Önskemål om tid (valfritt)</summary><label htmlFor="booking-times">När passar det bäst?</label><select id="booking-times" name="preferredTimes" defaultValue=""><option value="">Jag är flexibel</option><option>Vardagar, förmiddag</option><option>Vardagar, eftermiddag</option><option>Vardagar, kväll</option></select></details>
   <p className="hb-privacy">Du behöver inte beskriva privata besvär här. <a href="/integritet-forhandsversion" target="_blank" rel="noreferrer">Om testformuläret (ny flik)</a>.</p><button className="hb-submit" type="submit">Skicka konsultationsförfrågan</button><p className="hb-request-note">En kontaktförfrågan. Tiden är bokad först när vi har kommit överens.</p>
  </form></>}
 </dialog>;
}
