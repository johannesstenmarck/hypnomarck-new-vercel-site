export default function HomeHero({ openBooking }) {
  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
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
  );
}
