import HomeHero from "../components/HomeHero.jsx";
import AboutContent from "../components/AboutContent.jsx";
import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

export default function EmetofobiPage() {
  const { openBooking } = useOutletContext();

  return (
    <>
      <Seo
        title={PAGE_SEO.emetofobi.title}
        description={PAGE_SEO.emetofobi.description}
        path={PAGE_SEO.emetofobi.path}
        keywords={PAGE_SEO.emetofobi.keywords}
        jsonLd={[
          getBreadcrumbJsonLd([
            { name: "Hem", path: "/" },
            {
              name: "Emetofobi",
              path: "/emetofobi"
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
                Emetofobi
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg font-medium leading-tight">
                När rädslan för att kräkas begränsar ditt liv
              </h2>
            </header>

            <div className="max-w-3xl mx-auto space-y-6 text-white leading-relaxed text-lg md:text-xl">
              <p className="font-semibold text-xl md:text-2xl">Jag hjälper människor som vill känna sig friare i vardagen, men märker att rädslan för att kräkas håller dem tillbaka.</p>
              <p>”Är det säkert att äta på restaurang nu under vintern?”</p>
              <p>”Tänk om någon på festen har varit magsjuk?”</p>
              <p>”Vågar jag boka resan – vad händer om jag mår illa på vägen?”</p>
              <p>”Tänk om det går magsjuka på förskolan igen – tänk om vi blir smittade?”</p>
              <p>Kanske känner du igen de här tankarna och hur de kan påverka dina val? Du längtar efter att kunna vara mer närvarande och göra det du vill, utan att rädslan får styra.</p>
              <p>Genom hypnos och coaching utforskar vi hur du upplever rädslan och de reaktioner och mönster som följer med den. Målet är att stärka din känsla av lugn, tillit till dig själv och frihet i vardagen. Arbetet anpassas efter dina behov och sker i en takt som känns hanterbar för dig.</p>
              <p>Upplägget sker online över 4–6 sessioner. Under konsultationen pratar vi om dina behov och om mitt arbetssätt passar dig.</p>
              <p className="font-semibold">Boka en kostnadsfri konsultation om du vill utforska hur rädslan påverkar dig och vad du skulle vilja förändra.</p>
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
