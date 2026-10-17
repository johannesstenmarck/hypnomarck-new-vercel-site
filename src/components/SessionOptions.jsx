import { offers } from '../content/practice.js';

export default function SessionOptions() {
  return <>
    <p>Vi börjar med en kostnadsfri konsultation på 30 minuter, på telefon eller via Google Meet. Den ingår som första steg i båda uppläggen. Du får känna efter innan du bestämmer dig.</p>
    <dl className="hp-offers">{offers.map(offer => <div key={offer.id}>
      <dt><span className="hp-offer-name">{offer.name}{offer.method && <small>{offer.method}</small>}</span><span className="hp-offer-price">{offer.price}</span></dt>
      <dd><ul>{offer.includes.map(item => <li key={item}>{item}</li>)}</ul></dd>
    </div>)}</dl>
    <p className="hp-rates-note">Inspelningarna för egen övning är ungefär 20–30 minuter och kan användas även efter våra möten. Uppföljningen sker efter några veckor, när vi har avslutat sessionerna och tillsammans bedömt att vi nått målet.</p>
    <p className="hp-rates-note">Vi går igenom fokus och upplägg tillsammans. Under konsultationen kan vi boka den första sessionen, eller hitta en tid via e-post efteråt.</p>
  </>;
}
