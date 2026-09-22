import HomeHero from "../components/HomeHero.jsx";
import AboutContent from "../components/AboutContent.jsx";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

export default function ScenskrackPage() {
  const { openBooking } = useOutletContext();

  return (
    <>
      <Seo
        title={PAGE_SEO.scenskrack.title}
        description={PAGE_SEO.scenskrack.description}
        path={PAGE_SEO.scenskrack.path}
        keywords={PAGE_SEO.scenskrack.keywords}
        jsonLd={[
          getBreadcrumbJsonLd([
            { name: "Hem", path: "/" },
            {
              name: "Scenskräck",
              path: "/scenskrack"
            }
          ])
        ]}
      />

      <HomeHero openBooking={openBooking} />
      <div className="relative z-10 pt-16 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <section className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-emerald-700/30">
            <header className="text-center mb-10">
              <p className="text-sm md:text-base uppercase tracking-[0.22em] text-emerald-100/80 mb-4">
                Scenskräck
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg font-medium leading-tight">
                När du vill ta plats – men scenskräcken håller dig tillbaka
              </h2>
            </header>

            <div className="max-w-3xl mx-auto space-y-6 text-white leading-relaxed text-lg md:text-xl">
              <p className="font-semibold text-xl md:text-2xl">Jag hjälper människor som vill uttrycka sig och ta plats, men märker att nervositeten och rädslan för att bli bedömda håller dem tillbaka.</p>
              <p>”Tänk om jag tappar bort orden och det blir helt tyst?”</p>
              <p>”Kommer alla att se hur nervös jag är?”</p>
              <p>”Jag kan det här – varför låser det sig när andra tittar på?”</p>
              <p>Kanske känner du igen de här tankarna och hur de kan påverka dina val? Det kan handla om att tala inför en grupp, hålla en presentation, sjunga, spela eller stå på scen. Något du vill göra blir i stället förknippat med oro, självkritik eller en impuls att dra dig undan.</p>
              <p>Genom hypnos och coaching utforskar vi hur du upplever scenskräcken och de reaktioner och mönster som följer med den. Målet är att stärka din känsla av lugn, närvaro och tillit till dig själv, så att du får större frihet att uttrycka det du vill. Arbetet anpassas efter dina behov och sker i en takt som känns hanterbar för dig.</p>
              <p>Upplägget sker online över 4–6 sessioner. Under konsultationen pratar vi om dina behov och om mitt arbetssätt passar dig.</p>
              <p className="font-semibold">Boka en kostnadsfri konsultation om du vill utforska vad som händer när du hamnar i blickfånget och vad du skulle vilja förändra.</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-8 py-3 bg-emerald-900/50 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800/60 transition text-lg font-medium"
              >
                Boka en kostnadsfri konsultation
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("free-session")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-stone-900/60 backdrop-blur-md border-2 border-stone-600/60 text-white rounded-full hover:bg-stone-800/70 transition text-lg font-medium"
              >
                Prova gratis hypnos
              </button>
            </div>
          </section>
        </div>
      </div>
      <AboutContent openBooking={openBooking} headingLevel="h2" />
    </>
  );
}
