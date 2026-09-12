import { faqItems } from "../faqItems.js";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";



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
      "Olika människor har olika lätt att nå ett hypnotiskt tillstånd men upplevelser och resultat varierar. Vilja och öppenhet innebär inte att ett visst resultat kan garanteras."
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

          <section className="space-y-4 text-white leading-relaxed text-lg md:text-xl">
            <h2 className="text-2xl md:text-3xl font-serif">Hypnos och hypnoterapi</h2>
            <p>Hypnos innebär fokuserad uppmärksamhet och arbete med suggestioner, det vill säga förslag. I hypnoterapi används detta i ett samtal om det du vill förändra. Upplevelsen varierar mellan personer.</p>
            <p>Hos mig börjar vi med att prata om dina mål. Du får sedan guidning och möjlighet att reflektera över dina upplevelser. Du kan säga till om något känns obekvämt och be att vi pausar eller avbryter.</p>
          </section>
          <section id="forskning" className="space-y-4 text-white leading-relaxed text-lg md:text-xl">
            <h2 className="text-2xl md:text-3xl font-serif">Vad säger forskningen om hypnos?</h2>
            <p>Forskningsstödet skiljer sig mellan olika användningsområden. NCCIH, en del av amerikanska National Institutes of Health, beskriver stöd för att hypnos kan hjälpa vid vissa smärttillstånd. För oro inför medicinska ingrepp är resultaten lovande men inte avgörande, och för rökavvänjning är resultaten motstridiga.</p>
            <p>Det betyder inte att hypnos passar alla eller att en viss effekt kan utlovas. Studier av en särskild metod eller patientgrupp visar inte automatiskt hur en annan form av hypnoterapi fungerar.</p>
            <p>Källa: <a href="https://www.nccih.nih.gov/health/hypnosis" className="underline" target="_blank" rel="noopener noreferrer">NCCIH:s forskningsöversikt om hypnos</a>.</p>
          </section>
          <section className="space-y-4 text-white leading-relaxed text-lg md:text-xl">
            <h2 className="text-2xl md:text-3xl font-serif">Hypnoterapi online – så går det till</h2>
            <p>Jag tar emot privatpersoner online. Första steget är en kostnadsfri konsultation på 30 minuter. Vi pratar om vad du vill ha hjälp med och om mitt arbetssätt passar. En enskild session är 60–90 minuter.</p>
            <p>Du behöver en ostörd plats och en stabil internetuppkoppling. För företag kan jag även komma till arbetsplatsen.</p>
            <p><a href="/om-mig" className="underline">Läs om Johannes Stenmarck och certifieringen i Hypnoterapi 2.0</a> eller <a href="/#pricing" className="underline">se sessioner och priser</a>.</p>
          </section>
          <section className="space-y-4 text-white leading-relaxed text-lg md:text-xl">
            <h2 className="text-2xl md:text-3xl font-serif">Ett komplement till vård</h2>
            <p>Hypnoterapi ersätter inte medicinsk eller psykiatrisk vård. Om du har en diagnos, tar läkemedel eller är osäker på om hypnos passar dig bör du prata med din behandlande vårdgivare. Ändra inte en ordinerad behandling på egen hand.</p>
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
              loading="lazy"
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/FYSi_FQKrp8"
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
