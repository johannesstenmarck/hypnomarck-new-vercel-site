import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SiteNav({
  showHeader,
  showMobileMenu,
  setShowMobileMenu,
  onOpenBooking,
  scrollToId
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goFreeSession = () => {
    setShowMobileMenu(false);
    if (isHome) {
      scrollToId("free-session");
    } else if (location.pathname === "/om-hypnos" || location.pathname === "/om-mig") {
      document.getElementById("free-session")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById("free-session")?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

  const goHomeScroll = (id) => {
    setShowMobileMenu(false);
    if (isHome) {
      scrollToId(id);
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200/50 z-50 transition-transform duration-300 ${
        !showHeader ? "-translate-y-full" : ""
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="hidden md:flex justify-between items-center h-16 gap-8">
          <Link to="/" className="text-xl font-serif text-stone-800 whitespace-nowrap">
            Johannes Stenmarck Hypnoterapeut och Coach
          </Link>

          <div className="flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            <button type="button" onClick={() => goHomeScroll("home")} className="text-stone-600 hover:text-stone-900 transition whitespace-nowrap">
              Hem
            </button>
            <Link to="/om-hypnos" className="text-stone-600 hover:text-stone-900 transition whitespace-nowrap">
              Vad är hypnos?
            </Link>
            <button type="button" onClick={goFreeSession} className="text-stone-600 hover:text-stone-900 transition whitespace-nowrap">
              Gratis Hypnos
            </button>
            <Link to="/om-mig" className="text-stone-600 hover:text-stone-900 transition whitespace-nowrap">
              Om mig
            </Link>
            <button type="button" onClick={() => goHomeScroll("pricing")} className="text-stone-600 hover:text-stone-900 transition whitespace-nowrap">
              Sessioner
            </button>
            <button type="button" onClick={() => goHomeScroll("faq")} className="text-stone-600 hover:text-stone-900 transition whitespace-nowrap">
              FAQ
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              onOpenBooking();
            }}
            className="px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition whitespace-nowrap"
          >
            Boka gratis konsultation
          </button>
        </div>

        <div className="md:hidden flex flex-col items-center py-3">
          <Link to="/" className="text-base font-serif text-stone-800 text-center mb-2">
            Johannes Stenmarck Hypnoterapeut och Coach
          </Link>

          <button
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-1.5 hover:bg-stone-100 rounded-full transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showMobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {showMobileMenu && (
          <div className="md:hidden py-4 space-y-3 border-t border-stone-200">
            <button
              type="button"
              onClick={() => goHomeScroll("home")}
              className="block w-full text-left px-4 py-2 text-stone-600 hover:text-stone-900"
            >
              Hem
            </button>
            <Link
              to="/om-hypnos"
              onClick={() => setShowMobileMenu(false)}
              className="block w-full text-left px-4 py-2 text-stone-600 hover:text-stone-900"
            >
              Vad är hypnos?
            </Link>
            <button type="button" onClick={goFreeSession} className="block w-full text-left px-4 py-2 text-stone-600 hover:text-stone-900">
              Gratis Hypnos
            </button>
            <Link
              to="/om-mig"
              onClick={() => setShowMobileMenu(false)}
              className="block w-full text-left px-4 py-2 text-stone-600 hover:text-stone-900"
            >
              Om mig
            </Link>
            <button type="button" onClick={() => goHomeScroll("pricing")} className="block w-full text-left px-4 py-2 text-stone-600 hover:text-stone-900">
              Sessioner
            </button>
            <button type="button" onClick={() => goHomeScroll("faq")} className="block w-full text-left px-4 py-2 text-stone-600 hover:text-stone-900">
              FAQ
            </button>
            <button
              type="button"
              onClick={() => {
                setShowMobileMenu(false);
                onOpenBooking();
              }}
              className="mx-4 px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition w-auto inline-block"
            >
              Boka gratis konsultation
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
