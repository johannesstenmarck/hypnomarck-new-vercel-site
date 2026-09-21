import { useOutletContext } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { PAGE_SEO } from "../seo/pageMeta.js";
import { getBreadcrumbJsonLd } from "../seo/homeJsonLd.js";

export default function ProkrastineringFreezePage() {
  const { openBooking } = useOutletContext();

  return (
    <>
      <Seo
        title={PAGE_SEO.prokrastineringFreeze.title}
        description={PAGE_SEO.prokrastineringFreeze.description}
        path={PAGE_SEO.prokrastineringFreeze.path}
        keywords={PAGE_SEO.prokrastineringFreeze.keywords}
        jsonLd={[
          getBreadcrumbJsonLd([
            { name: "Hem", path: "/" },
            {
              name: "Prokrastinering, självtvivel och freeze",
              path: "/prokrastinering-sjalvtvivel-freeze"
            }
          ])
        ]}
      />

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <section className="bg-emerald-950/60 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-emerald-700/30">
            <header className="text-center mb-10">
              <p className="text-sm md:text-base uppercase tracking-[0.22em] text-emerald-100/80 mb-4">
                Prokrastinering · Självtvivel · Freeze
              </p>
              <h1 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg font-medium leading-tight">
                När du vet vad du vill — men något inom dig håller tillbaka
              </h1>
            </header>

            <div className="max-w-3xl mx-auto space-y-6 text-white leading-relaxed text-lg md:text-xl">
              <p className="font-semibold text-xl md:text-2xl">
                Jag hjälper människor som vet vad de vill göra, men ändå märker att något inom dem håller tillbaka.
              </p>

              <p>
                Det kan visa sig som självtvivel, prokrastinering, scenskräck, freeze eller ett återkommande mönster där du drar dig undan precis när något börjar bli viktigt.
              </p>

              <p>
                Genom hypnos och coaching arbetar vi med de automatiska reaktioner och inre mönster som ligger bakom beteendet, med målet att du ska kunna känna större lugn, tillit till dig själv och frihet att agera på det du egentligen vill.
              </p>

              <p>
                Upplägget sker online över 4–6 sessioner.
              </p>

              <p className="font-semibold">
                Boka en kostnadsfri konsultation om du vill utforska vad som håller dig tillbaka och vad som kan förändras.
              </p>
            </div>

            <div className="text-center mt-10">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-8 py-3 bg-emerald-900/50 backdrop-blur-md border-2 border-emerald-600/60 text-white rounded-full hover:bg-emerald-800/60 transition text-lg font-medium"
              >
                Boka en kostnadsfri konsultation
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
