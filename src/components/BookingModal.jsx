import { useState, useEffect } from "react";

const EXPERIENCE_LABELS = {
  "": "",
  no: "Nej, ingen erfarenhet",
  therapy: "Ja, terapi",
  hypnosis: "Ja, hypnos",
  both: "Ja, både terapi och hypnos"
};

export default function BookingModal({ open, onClose }) {
  const [phase, setPhase] = useState("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    experience: "",
    preferredTimes: "",
    consent: false
  });

  useEffect(() => {
    if (!open) {
      setPhase("form");
      setError("");
      setSubmitting(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        experience: "",
        preferredTimes: "",
        consent: false
      });
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      experience: EXPERIENCE_LABELS[form.experience] || form.experience || "",
      preferredTimes: form.preferredTimes.trim(),
      consent: form.consent
    };

    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) {
        throw new Error(
          "Boknings-API svarade inte korrekt (lokalt: använd `vercel dev` eller testa efter deploy till Vercel)."
        );
      }
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Serverfel");
      }
      setPhase("thanks");
    } catch (err) {
      setError(err.message || "Något gick fel. Försök igen eller maila info@hypnomarck.se.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-stone-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-2xl font-serif text-stone-800">Boka gratis konsultation</h3>
          <button type="button" onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {phase === "thanks" ? (
            <div className="text-stone-700 text-center py-8 px-4 leading-relaxed text-lg">
              <p>Tack för din förfrågan! Jag återkommer till dig inom 24 h.</p>
              <p className="mt-6 text-base">
                Med vänlig hälsning
                <br />
                Johannes Stenmarck – Hypnomarck
              </p>
            </div>
          ) : (
            <>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Fyll i formuläret nedan så hör jag av mig inom 24 timmar för att boka in en tid som passar dig. Konsultationen är
                kostnadsfri och tar cirka 30 minuter.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {error ? <p className="booking-form-error text-red-600 text-sm text-center">{error}</p> : null}

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="booking-name">
                    Namn *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Ditt fullständiga namn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="booking-email">
                    E-post *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="din@epost.se"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="booking-phone">
                    Telefon *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="070-123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="booking-message">
                    Vad söker du hjälp med? *
                  </label>
                  <textarea
                    id="booking-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Berätta kort om vad du vill arbeta med..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="booking-experience">
                    Har du tidigare erfarenhet av terapi eller hypnos?
                  </label>
                  <select
                    id="booking-experience"
                    value={form.experience}
                    onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="">Välj ett alternativ</option>
                    <option value="no">Nej, ingen erfarenhet</option>
                    <option value="therapy">Ja, terapi</option>
                    <option value="hypnosis">Ja, hypnos</option>
                    <option value="both">Ja, både terapi och hypnos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="booking-times">
                    Föredragna tider
                  </label>
                  <input
                    id="booking-times"
                    type="text"
                    value={form.preferredTimes}
                    onChange={(e) => setForm((f) => ({ ...f, preferredTimes: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="T.ex. vardagar förmiddag, helger efter lunch..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="booking-consent"
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="booking-consent" className="text-sm text-stone-600">
                    Jag godkänner att mina uppgifter behandlas enligt integritetspolicyn
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition text-lg font-medium disabled:opacity-60"
                >
                  {submitting ? "Skickar…" : "Skicka bokningsförfrågan"}
                </button>
              </form>

              <p className="text-xs text-stone-500 mt-4 text-center">
                Du kommer att få en bekräftelse via e-post inom 24 timmar. Konsultationen sker online via videosamtal.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
