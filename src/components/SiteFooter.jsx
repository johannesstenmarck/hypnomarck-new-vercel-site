import { Link, useNavigate, useLocation } from "react-router-dom";

export default function SiteFooter() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isHypnos = location.pathname === "/om-hypnos";

  const scrollOrGoHome = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

  const goHowItWorks = () => {
    if (isHome) {
      document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/om-hypnos");
    }
  };

  const goFaq = () => {
    if (isHome) {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    } else if (isHypnos) {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/om-hypnos");
      setTimeout(() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

  return (
    <footer className="py-12 px-4 relative z-10 bg-stone-900/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-serif text-lg mb-4 drop-shadow-lg">Johannes Stenmarck Hypnoterapeut och Coach</h3>
            <p className="text-sm leading-relaxed text-white/80 drop-shadow-md">Förändring börjar under ytan</p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4 drop-shadow-md">Navigation</h4>
            <div className="space-y-2 text-sm text-white/80">
              <Link to="/" className="block hover:text-white transition drop-shadow-md">
                Hem
              </Link>
              <button type="button" onClick={goHowItWorks} className="block hover:text-white transition drop-shadow-md text-left">
                Hur det fungerar
              </button>
              <button type="button" onClick={() => scrollOrGoHome("pricing")} className="block hover:text-white transition drop-shadow-md text-left">
                Sessioner
              </button>
              <button type="button" onClick={goFaq} className="block hover:text-white transition drop-shadow-md text-left">
                FAQ
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4 drop-shadow-md">Information</h4>
            <div className="space-y-2 text-sm text-white/80">
              <a href="#" className="block hover:text-white transition drop-shadow-md">
                Integritetspolicy
              </a>
              <a href="#" className="block hover:text-white transition drop-shadow-md">
                Cookies
              </a>
              <a href="#" className="block hover:text-white transition drop-shadow-md">
                Disclaimer
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4 drop-shadow-md">Kontakt</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p className="drop-shadow-md">Stockholm, Sverige</p>
              <a href="mailto:info@hypnomarck.se" className="block hover:text-white transition drop-shadow-md">
                info@hypnomarck.se
              </a>
              <a
                href="https://www.instagram.com/hypnomarck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition drop-shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @hypnomarck
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/40 text-center text-sm">
          <p className="text-white/80 drop-shadow-md">&copy; 2026 Johannes Stenmarck Hypnoterapeut och Coach. Alla rättigheter förbehållna.</p>
          <p className="mt-2 text-xs text-white/70 drop-shadow-md">
            <strong>Viktigt:</strong> Hypnoterapi ersätter inte medicinsk eller psykiatrisk vård. Vid akut kris, kontakta 112 eller 1177.
          </p>
        </div>
      </div>
    </footer>
  );
}
