import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

export default function OmMigPage() {
  const { openBooking } = useOutletContext();

  return (
    <>
      <Seo
        title={PAGE_SEO.omMig.title}
        description={PAGE_SEO.omMig.description}
        path={PAGE_SEO.omMig.path}
        keywords={PAGE_SEO.omMig.keywords}
        jsonLd={[
          getBreadcrumbJsonLd([
            { name: "Hem", path: "/" },
            { name: "Om mig", path: "/om-mig" }
          ])
        ]}
      />
      <div className="relative z-10 pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-emerald-700/30 mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1 md:order-1">
              <img
                src="/profile.jpg"
                alt="Johannes Stenmarck, hypnoterapeut"
                className="w-full rounded-lg border-2 border-emerald-700/40 shadow-xl"
              />
            </div>
            <div className="order-2 md:order-2">
              <h1 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg mb-8 font-medium text-center md:text-left">Om mig</h1>
              <div className="space-y-4 text-white leading-relaxed drop-shadow-md text-lg md:text-xl font-medium">
                <p>
                  Johannes Stenmarck heter jag och jag är certifierad hypnoterapeut och coach med passion för att hjälpa människor hitta sin inre klarhet och
                  kraft att förändra sina liv.
                </p>
                <p>
                  Mitt arbete handlar om att skapa utrymme för läkning – att hjälpa dig övervinna kreativa och emotionella blockeringar, stärka din självkänsla
                  och självförtroende, och fördjupa dina relationer.
                </p>
                <p>Jag tror på förändring som sker inifrån – genom kontakt med det undermedvetna, där dina verkliga resurser finns.</p>
                <p className="text-white/90 pt-2">Mer om mig, min bakgrund, utbildning och filosofi kommer snart.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="free-session" className="max-w-4xl mx-auto text-center pb-8">
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
