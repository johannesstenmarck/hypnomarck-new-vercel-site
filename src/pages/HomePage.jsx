import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getHomeJsonLd } from "../seo/homeJsonLd.js";

export default function HomePage() {
  const { openBooking } = useOutletContext();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        path={PAGE_SEO.home.path}
        keywords={PAGE_SEO.home.keywords}
        jsonLd={[getHomeJsonLd()]}
      />
      <section id="home" className="pt-24 pb-32 sm:pb-16 md:pt-32 md:pb-24 px-4 relative min-h-[100vh] sm:min-h-[85vh] flex items-center z-10">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Förändring börjar
            <br />
            under ytan
          </h1>
          <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-8 py-3 bg-emerald-900/50 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800/60 transition text-lg shadow-xl"
            >
              Boka gratis konsultation
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("free-session")}
              className="px-8 py-3 bg-stone-900/60 backdrop-blur-md border-2 border-stone-600/60 text-white rounded-full hover:bg-stone-800/70 transition text-lg"
            >
              Prova gratis hypnos
            </button>
          </div>

          <div className="sm:hidden absolute bottom-4 left-4 right-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => openBooking()}
              className="w-full px-6 py-3 bg-emerald-900/90 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800 transition text-base font-medium shadow-xl"
            >
              Boka gratis konsultation
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("free-session")}
              className="w-full px-6 py-3 bg-stone-900/90 backdrop-blur-md border-2 border-stone-600/60 text-white rounded-full hover:bg-stone-800 transition text-base font-medium shadow-xl"
            >
              Prova gratis hypnos
            </button>
          </div>
        </div>
      </section>

      <section id="how" className="pt-40 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 border border-emerald-700/30 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-center text-white drop-shadow-lg mb-4">Hur fungerar hypnoterapi?</h2>
            <p className="text-center text-white text-lg md:text-xl drop-shadow-md font-medium">
              Hypnoterapi är ett vetenskapligt förankrat sätt att arbeta med det undermedvetna – där dina mönster, känslor och reaktioner har sina rötter. Jag
              hjälper dig att nå bestäende förändring på djupet, inte bara på ytan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-emerald-950/60 backdrop-blur-md rounded-lg p-6 border border-emerald-700/30">
              <div className="w-16 h-16 bg-emerald-900/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif text-white">1</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-white drop-shadow-lg font-medium">Fokuserad uppmärksamhet</h3>
              <p className="text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
                Du vägleds in i ett tillstånd av djup koncentration – medveten, men avslappnad. Som att vara helt försjunken i en bok eller film.
              </p>
            </div>

            <div className="text-center bg-emerald-950/60 backdrop-blur-md rounded-lg p-6 border border-emerald-700/30">
              <div className="w-16 h-16 bg-emerald-900/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif text-white">2</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-white drop-shadow-lg font-medium">Tillgång till det undermedvetna</h3>
              <p className="text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
                I detta tillstånd kan vi arbeta med de automatiska mönster och övertygelser som styr ditt beteende – oftast utan att du är medveten om dem.
              </p>
            </div>

            <div className="text-center bg-emerald-950/60 backdrop-blur-md rounded-lg p-6 border border-emerald-700/30">
              <div className="w-16 h-16 bg-emerald-900/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif text-white">3</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-white drop-shadow-lg font-medium">Integrering och förändring</h3>
              <p className="text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
                Nya perspektiv och känslomässiga responser etableras. Förändringen sker inifrån – naturligt och hållbart.
              </p>
            </div>
          </div>

          <div className="text-center mb-8 mt-8">
            <Link
              to="/om-hypnos"
              className="inline-block px-6 py-3 bg-emerald-900/50 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800/60 transition text-base md:text-lg"
            >
              Läs mer om hypnos
            </Link>
          </div>

          <div id="free-session" className="max-w-4xl mx-auto text-center pt-28">
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
      </section>

      <section id="about" className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-emerald-700/30">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1 md:order-1">
                <img src="/profile.jpg" alt="Hypnoterapeut" className="w-full rounded-lg border-2 border-emerald-700/40 shadow-xl" />
              </div>

              <div className="order-2 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif text-white drop-shadow-lg mb-6 font-medium">Om mig</h2>
                <div className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
                  <p>
                    Johannes Stenmarck heter jag och jag är certifierad hypnoterapeut och coach med passion för att hjälpa människor hitta sin inre klarhet
                    och kraft att förändra sina liv.
                  </p>
                  <p>
                    Mitt arbete handlar om att skapa utrymme för läkning – att hjälpa dig övervinna kreativa och emotionella blockeringar, stärka din
                    självkänsla och självförtroende, och fördjupa dina relationer.
                  </p>
                  <p>Jag tror på förändring som sker inifrån – genom kontakt med det undermedvetna, där dina verkliga resurser finns.</p>
                  <div className="mt-8">
                    <Link
                      to="/om-mig"
                      className="inline-block px-6 py-3 bg-emerald-700/60 backdrop-blur-sm text-white rounded-full hover:bg-emerald-600/70 transition border border-emerald-500/50"
                    >
                      Läs mer om mig
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">För vem är hypnoterapi?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-emerald-950/60 backdrop-blur-md border border-emerald-700/30 rounded-lg hover:border-emerald-600/60 transition"
              >
                <h3 className="text-xl md:text-2xl font-serif mb-3 text-white drop-shadow-lg font-medium">{item.title}</h3>
                <p className="text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">Vanliga missförstånd</h2>

          <div className="space-y-6">
            {[
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
            ].map((item, index) => (
              <div key={index} className="bg-emerald-950/60 backdrop-blur-md p-6 rounded-lg border border-emerald-700/30">
                <p className="text-lg md:text-xl text-white/80 italic mb-2 drop-shadow-md font-medium">{item.myth}</p>
                <p className="text-white drop-shadow-md leading-relaxed text-lg md:text-xl font-medium">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">Vad klienter säger</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sofia",
                text: "För min del har Johannes hjälpt mig att våga lita på mig själv och visa mer av vem jag är för andra människor. Efter våra möten känner jag mig lugnare, mer fokuserad och mer levande. Jag är gladare och har mer förhoppning om framtiden."
              },
              {
                name: "Kevin",
                text: 'Oavsett vad du behöver hjälp med, vila i Johannes guidning, var öppen och ärlig med dig själv och "aha"-upplevelserna kommer rulla in. Jag har erfarenhet av olika former av samtslsterapeuter sen tidigare, de flesta ville jag alltid avboka när det var dags, Johannes längtar man till. För att det sker saker direkt, om man ger sig hän.'
              },
              {
                name: "Eva-Lotte",
                text: "Jag gillar din röst och ditt sätt. Det gör mig lugn och trygg, att våga släppa kontrollbehovet. Hypnosen har gjort att jag har fått en bekräftelse på att mitt problem ligger bakom mig. Det är inget som stör mig längre."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-emerald-950/60 backdrop-blur-md p-6 rounded-lg border border-emerald-700/30">
                <p className="text-white/90 italic mb-4 leading-relaxed drop-shadow-md text-lg md:text-xl">&quot;{testimonial.text}&quot;</p>
                <p className="text-white font-medium drop-shadow-lg text-lg md:text-xl">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-4 font-medium">Sessioner och priser</h2>
          <p className="text-center text-white/90 drop-shadow-md mb-12 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Första konsultationen är alltid gratis – för att vi ska känna att det passar.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-950/60 backdrop-blur-md p-8 rounded-lg border border-emerald-700/30">
              <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white drop-shadow-lg font-medium">Gratis konsultation</h3>
              <div className="text-4xl md:text-5xl font-serif mb-4 text-white drop-shadow-lg">0 kr</div>
              <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md text-lg md:text-xl">
                30 minuter där vi pratar om dina mål, vad du söker, och hur hypnoterapi kan hjälpa dig.
              </p>
              <ul className="space-y-3 mb-6 text-white/90 text-lg md:text-xl">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Ingen behandling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Känna av passformen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Ställa frågor</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full px-6 py-3 border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-900/30 hover:border-emerald-500 transition backdrop-blur-sm"
              >
                Boka nu
              </button>
            </div>

            <div className="bg-emerald-900/60 backdrop-blur-md p-8 rounded-lg border-2 border-emerald-600/60 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm border border-emerald-500/60">
                Populärast
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white drop-shadow-lg font-medium">Transformation</h3>
              <div className="text-4xl md:text-5xl font-serif mb-4 text-white drop-shadow-lg">8 000 kr</div>
              <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md text-lg md:text-xl">För dig som vill åstadkomma en djupare bestående förändring.</p>
              <ul className="space-y-3 mb-6 text-white/90 text-lg md:text-xl">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>4 fullständiga sessioner</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Program med 4 förinspelade sessioner för fördjupning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Uppföljningssamtal</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full px-6 py-3 bg-emerald-700/60 backdrop-blur-sm text-white rounded-full hover:bg-emerald-600/70 transition border border-emerald-500/50"
              >
                Boka nu
              </button>
            </div>

            <div className="bg-emerald-950/60 backdrop-blur-md p-8 rounded-lg border border-emerald-700/30">
              <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white drop-shadow-lg font-medium">Enskild session</h3>
              <div className="text-4xl md:text-5xl font-serif mb-4 text-white drop-shadow-lg">2 500 kr</div>
              <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md text-lg md:text-xl">60-90 minuter fokuserad mental träning mot ett specifikt mål.</p>
              <ul className="space-y-3 mb-6 text-white/90 text-lg md:text-xl">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Gratis konsultation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Fullständig hypnossession + förinspelad mental träning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Uppföljningssamtal</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full px-6 py-3 border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-900/30 hover:border-emerald-500 transition backdrop-blur-sm"
              >
                Boka nu
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-12 font-medium">Vanliga frågor</h2>

          <div className="space-y-4">
            {[
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
            ].map((faq, index) => (
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
        </div>
      </section>

      <section id="contact" className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white drop-shadow-lg font-medium">Ta första steget</h2>
          <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-emerald-700/30">
            <p className="text-lg md:text-xl text-white mb-0 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              Resan mot din drömförändring börjar med ett litet steg till ökad medvetenhet. Boka en gratis konsultation så pratar vi om vad du söker och hur jag
              kan hjälpa dig.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openBooking()}
            className="px-8 py-3 bg-emerald-900/50 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800/60 transition text-lg font-medium mb-8"
          >
            Boka gratis konsultation
          </button>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-emerald-700/30 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center text-white drop-shadow-lg mb-4 font-medium">Följ mig på Instagram</h2>
            <p className="text-center text-lg md:text-xl text-white/90 drop-shadow-md font-medium">
              Dela resan mot inre klarhet – inspiration, insikter och verktyg för förändring.
            </p>
          </div>

          <div className="text-center mb-8">
            <a
              href="https://www.instagram.com/hypnomarck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-stone-900/60 backdrop-blur-md border-2 border-stone-600/60 text-white rounded-full hover:bg-stone-800/70 transition text-lg font-medium"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @hypnomarck
            </a>
          </div>

          <div className="mb-12">
            <div className="embedsocial-hashtag" data-ref="4bd2d9425a169a55e74472684668c188e96c21dc" />
          </div>

          <div className="text-center">
            <p className="text-white text-lg mb-2 drop-shadow-lg font-medium">Har du frågor?</p>
            <a href="mailto:info@hypnomarck.se" className="text-white text-xl hover:text-white/90 transition drop-shadow-lg font-medium">
              info@hypnomarck.se
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
