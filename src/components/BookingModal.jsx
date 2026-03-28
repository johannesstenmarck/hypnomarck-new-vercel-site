export default function BookingModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-stone-200 flex justify-between items-center sticky top-0 bg-white">
          <h3 className="text-2xl font-serif text-stone-800">Boka gratis konsultation</h3>
          <button type="button" onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-stone-600 mb-6 leading-relaxed">
            Fyll i formuläret nedan så hör jag av mig inom 24 timmar för att boka in en tid som passar dig. Konsultationen är
            kostnadsfri och tar cirka 30 minuter.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Namn *</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="Ditt fullständiga namn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">E-post *</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="din@epost.se"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Telefon *</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="070-123 45 67"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Vad söker du hjälp med? *</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="Berätta kort om vad du vill arbeta med..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Har du tidigare erfarenhet av terapi eller hypnos?</label>
              <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700">
                <option value="">Välj ett alternativ</option>
                <option value="no">Nej, ingen erfarenhet</option>
                <option value="therapy">Ja, terapi</option>
                <option value="hypnosis">Ja, hypnos</option>
                <option value="both">Ja, både terapi och hypnos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Föredragna tider</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="T.ex. vardagar förmiddag, helger efter lunch..."
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="consent" className="mt-1 mr-2" />
              <label htmlFor="consent" className="text-sm text-stone-600">
                Jag godkänner att mina uppgifter behandlas enligt integritetspolicyn
              </label>
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition text-lg font-medium">
              Skicka bokningsförfrågan
            </button>
          </form>

          <p className="text-xs text-stone-500 mt-4 text-center">
            Du kommer att få en bekräftelse via e-post inom 24 timmar. Konsultationen sker online via videosamtal.
          </p>
        </div>
      </div>
    </div>
  );
}
