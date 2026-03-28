import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

const faqItems = [
  {
    q: "Kommer jag att förlora kontrollen?",
    a: "Nej. Du är alltid medveten under hypnos och kan när som helst välja att avbryta. Hypnos är ett tillstånd av fokuserad uppmärksamhet – inte kontrollförlust."
  },
  {
    q: "Kan alla hypnotiseras?",
    a: "De flesta kan gå in i hypnos om de vill. Det kräver öppenhet och vilja att delta. Vissa går djupare än andra, men djup är inte nödvändigt för förändring."
  },
  {
    q: "Måste jag kunna visualisera?",
    a: "Nej. Det finns många vägar in i hypnos. Om du inte ser inre bilder kan vi arbeta med känslor, ljud, tankar eller kroppsupplevelser istället."
  },
  {
    q: "Vad händer om jag somnar?",
    a: "Det kan hända, särskilt om du är väldigt avslappnad. Det är okej – du vaknar när sessionen är slut, och vi justerar tekniken nästa gång."
  },
  {
    q: "Hur många sessioner behöver jag?",
    a: "Det varierar. Vissa upplever förändring efter en session, andra behöver flera. Vi utvärderar tillsammans efter varje tillfälle och justerar efter dina behov."
  },
  {
    q: "Är hypnos vetenskapligt bevisat?",
    a: "Ja. Hypnos är väldokumenterat inom forskningen och används inom hälso- och sjukvård för bland annat smärtlindring, ångest och sömnproblem."
  },
  {
    q: "Vad är skillnaden mellan hypnos och meditation?",
    a: "Meditation handlar ofta om att observera tankarna. Hypnos är mer riktat – vi arbetar aktivt med specifika mönster, känslor eller övertygelser."
  },
  {
    q: "Vad händer efter en session?",
    a: "Du kan känna dig avslappnad, trött, eller energisk. Effekterna utvecklas ofta över tid. Du får en ljudinspelning att lyssna på hemma för att fördjupa arbetet."
  },
  {
    q: "Kan hypnos ersätta terapi eller medicin?",
    a: "Nej. Hypnoterapi är ett komplement – inte en ersättning. Om du har psykiatriska diagnoser eller tar medicin ska du alltid ha kontakt med din läkare eller terapeut."
  },
  {
    q: "Vad händer om jag mår dåligt under en session?",
    a: "Vi kan när som helst pausa eller avbryta. Du har alltid kontrollen. Jag är utbildad i att skapa trygghet och hantera eventuella reaktioner."
  },
  {
    q: "Hur vet jag om det är säkert för mig?",
    a: "Under den fria konsultationen går vi igenom din bakgrund, eventuella diagnoser och mediciner. Om hypnos inte passar just dig kommer jag att säga det."
  },
  {
    q: "Fungerar det online?",
    a: "Ja, det fungerar lika bra online som på plats. Det viktiga är att du sitter ostörd och har en stabil uppkoppling."
  }
];

const forVem = [
  {
    title: "Ångest och oro",
    description: "Om du känner att oron tar över, även när du logiskt vet att det inte finns någon fara."
  },
  {
    title: "Låg självkänsla",
    description: "Om du känner dig aldrig riktigt bra nog, trots att andra säger motsatsen."
  },
  {
    title: "Sömnsvårigheter",
    description: "Om tankarna snurrar när du ska sova, eller om du vaknar med ett spänt bröst."
  },
  {
    title: "Begränsande mönster",
    description: "Om du upprepar samma beteenden trots att du vet att de inte tjänar dig."
  },
  {
    title: "Prestationsångest",
    description: "Om du fryser eller blockerar i situationer där du vill prestera – på jobbet, socialt, kreativt."
  },
  {
    title: "Stress och utbrändhet",
    description: "Om du känner dig tom, utmattad, eller ständigt på gränsen."
  }
];

const myths = [
  {
    myth: '"Jag kommer att förlora kontrollen"',
    reality: "Du är alltid medveten och har full kontroll. Du kan inte tvingas göra något mot din vilja."
  },
  {
    myth: '"Hypnos är något mystiskt"',
    reality: "Hypnos är ett naturligt tillstånd som du redan upplever dagligen – när du dagdrömmer, läser intensivt, eller kör på autopilot."
  },
  {
    myth: '"Det fungerar bara på lättpåverkade människor"',
    reality:
      "Olika människor har olika lätt att nå ett hypnotiskt tillstånd men för alla som vill och är öppna för förändring är hypnos ett kraftfullt verktyg att uppnå påtagliga, beständiga resultat."
  }
];

export default function OmHypnosPage() {
  const { openBooking } = useOutletContext();

  return (
    <>
      <Seo
        title={PAGE_SEO.omHypnos.title}
        description={PAGE_SEO.omHypnos.description}
        path={PAGE_SEO.omHypnos.path}
        keywords={PAGE_SEO.omHypnos.keywords}
        jsonLd={[
          getBreadcrumbJsonLd([
            { name: "Hem", path: "/" },
            { name: "Vad är hypnos?", path: "/om-hypnos" }
          ])
        ]}
      />
      <div className="relative z-10 pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-emerald-700/30 space-y-10">
          <header className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg font-medium">Vad är hypnos?</h1>
          </header>

          <section className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Vetenskapen bakom hypnos</h2>
            <p>
              Hypnos är ett naturligt tillstånd av fokuserad uppmärksamhet och ökad mottaglighet för förslag. Det är inte sömn, inte medvetslöshet, och inte
              kontrollförlust.
            </p>
            <p>
              Moderna hjärnskanningar visar att hypnos aktiverar specifika områden i hjärnan som är kopplade till uppmärksamhet, visualisering och emotionell
              bearbetning. Under hypnos ökar aktiviteten i främre hjärnbarken samtidigt som den kritiska, analyserande delen av medvetandet mjukas upp. Detta
              skapar ett tillstånd där nya perspektiv och beteendemönster kan etableras mer effektivt.
            </p>
            <p>
              Forskare beskriver hypnos som ett tillstånd av &quot;fokuserad absorption&quot; – liknande när du är helt försjunken i en bok, film, eller i flow
              under en aktivitet. Du är medveten, men din uppmärksamhet är riktad inåt snarare än mot yttre störningar.
            </p>
          </section>

          <section className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Historien om hypnos</h2>
            <p>
              Hypnos har en lång historia som sträcker sig tillbaka till antikens läkningsritualer, men den moderna förståelsen började ta form på 1700-talet med
              Franz Mesmer. Trots att hans teorier om &quot;animalisk magnetism&quot; senare visade sig felaktiga, lade han grunden för att studera medvetandets
              kraft.
            </p>
            <p>
              Under 1800-talet började James Braid använda termen &quot;hypnos&quot; (efter den grekiska sömngudens namn Hypnos) och studerade fenomenet mer
              vetenskapligt. På 1900-talet gjorde Milton Erickson hypnos till en respekterad terapeutisk metod genom att utveckla subtila, klientcentrerade
              tekniker.
            </p>
            <p>
              Idag används hypnos inom både psykologi och medicin, och forskningen fortsätter att avslöja dess potential för smärtlindring, stresshantering och
              beteendeförändring.
            </p>
          </section>

          <section className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Forskning och evidens</h2>
            <p>
              Hypnos är väldokumenterat inom forskningen och används inom hälso- och sjukvård för bland annat smärtlindring, ångest och sömnproblem.
            </p>
            <p>
              Studier visar att hypnos kan minska smärta vid medicinska ingrepp, förbättra sömnkvalitet, minska symtom vid IBS (irritable bowel syndrome), och
              stödja rökavvänjning. American Psychological Association och British Medical Association har erkänt hypnos som en legitim behandlingsmetod.
            </p>
            <p>
              Metaanalyser av hundratals studier bekräftar att hypnos har effekt på en rad olika tillstånd – särskilt i kombination med annan terapi. Det är inte
              ett mirakelmedel, men ett kraftfullt komplement som arbetar med kroppens och psykets egna resurser.
            </p>
          </section>

          <section className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Hur fungerar hypnos? (Fördjupning)</h2>
            <p>
              Under hypnos når du ett tillstånd där det kritiska tänkandet mjukas upp, vilket gör det möjligt att arbeta direkt med undermedvetna mönster och
              övertygelser.
            </p>
            <p>
              Ditt undermedvetna styr mycket av ditt beteende – reaktioner på stress, automatiska tankemönster, känslomässiga responser. I hypnos kan vi
              kommunicera direkt med denna del av dig, förbi de logiska försvar som annars blockerar förändring.
            </p>
            <p>
              Detta sker genom suggestioner (förslag) som planteras när du är i ett mottagligt tillstånd. Men det handlar inte om manipulation – du kan bara
              acceptera förslag som stämmer överens med dina värderingar och mål. Hypnos öppnar dörren, men du väljer själv vad som får komma in.
            </p>
          </section>

          <section className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Olika typer av hypnos</h2>
            <p>Det finns flera olika inriktningar inom hypnos, var och en med sitt eget fokus och sina egna tekniker:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Klassisk hypnos – direkta suggestioner och djup avslappning.</li>
              <li>Ericksoniansk hypnos – indirekt, metaforisk, anpassad efter individen.</li>
              <li>Kognitiv hypnoterapi – kombinerar hypnos med KBT-principer.</li>
              <li>Regressiv hypnos – utforskar minnen och tidiga upplevelser.</li>
              <li>Självhypnos – tekniker du kan använda på egen hand.</li>
            </ul>
            <p>
              Jag arbetar främst med en blandning av Ericksoniansk och kognitiv hypnoterapi – anpassad efter dina behov och vad som fungerar bäst för dig.
            </p>
          </section>

          <section className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Vad hypnos INTE är</h2>
            <p>
              Hypnos är inte magiskt, inte farligt, och inte kontroll över någon annans vilja. De scenhypnoser du sett på TV är underhållning – terapeutisk hypnos
              är något helt annat.
            </p>
            <p>
              Du kan inte fastna i hypnos, du kan inte tvingas avslöja hemligheter, och du kommer inte göra något som strider mot dina värderingar. Du är alltid
              medveten och har alltid valet att avbryta.
            </p>
            <p>
              Hypnos ersätter inte medicin eller psykiatrisk vård – det är ett komplement. Vid allvarliga psykiska tillstånd ska du alltid ha kontakt med läkare
              eller legitimerad terapeut.
            </p>
          </section>
        </div>

        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">För vem är hypnoterapi?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {forVem.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-emerald-950/60 backdrop-blur-md border border-emerald-700/30 rounded-lg hover:border-emerald-600/60 transition"
              >
                <h3 className="text-xl md:text-2xl font-serif mb-3 text-white drop-shadow-lg font-medium">{item.title}</h3>
                <p className="text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">Vanliga missförstånd</h2>
          <div className="space-y-6">
            {myths.map((item, index) => (
              <div key={index} className="bg-emerald-950/60 backdrop-blur-md p-6 rounded-lg border border-emerald-700/30">
                <p className="text-lg md:text-xl text-white/80 italic mb-2 drop-shadow-md font-medium">{item.myth}</p>
                <p className="text-white drop-shadow-md leading-relaxed text-lg md:text-xl font-medium">{item.reality}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">Vanliga frågor</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="bg-emerald-950/60 backdrop-blur-md p-6 rounded-lg border border-emerald-700/30 group">
                <summary className="cursor-pointer text-lg md:text-xl font-serif text-white drop-shadow-lg flex justify-between items-center font-medium">
                  {faq.q}
                  <svg className="w-5 h-5 text-white transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-white/90 leading-relaxed drop-shadow-md text-base md:text-lg">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div id="free-session" className="max-w-4xl mx-auto text-center pt-16 pb-8">
          <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-emerald-700/30">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white drop-shadow-lg font-medium">Prova hypnos – kostnadsfritt</h2>
            <p className="text-lg md:text-xl text-white mb-0 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              Nyfiken men osäker? Lyssna på en gratis introduktionssession och få en försmak för hur jag jobbar och känn hur hypnos kan fungera för dig.
            </p>
          </div>
          <div className="bg-stone-900/60 backdrop-blur-md rounded-lg aspect-video max-w-3xl mx-auto mb-8 border border-emerald-700/30 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FYSi_FQKrp8"
              title="Gratis hypnos session"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <button
            type="button"
            onClick={() => openBooking()}
            className="px-8 py-3 bg-emerald-900/50 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800/60 transition text-lg font-medium"
          >
            Boka en gratis konsultation
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
