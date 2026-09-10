import { useEffect, useState } from "react";
import { consent, useCookieConsent } from "../useCookieConsent.js";

export default function CookieConsent() {
  const cookieConsent = useCookieConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const showBanner = settingsOpen || cookieConsent === null;

  useEffect(() => {
    const openCookieSettings = () => setSettingsOpen(true);
    window.addEventListener("open-cookie-settings", openCookieSettings);
    return () => window.removeEventListener("open-cookie-settings", openCookieSettings);
  }, []);

  const chooseConsent = (value) => {
    consent.setChoice(value);
    setSettingsOpen(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-5 shadow-xl">
        <p className="mb-4 text-sm text-gray-700">
          Vi använder valfria statistikcookies för att förstå hur
          webbplatsen används och förbättra den. Du kan godkänna eller neka
          statistikcookies.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => chooseConsent("granted")}
            className="rounded-md border border-gray-500 px-4 py-2 text-gray-800"
          >
            Godkänn statistik
          </button>

          <button
            onClick={() => chooseConsent("denied")}
            className="rounded-md border border-gray-500 px-4 py-2 text-gray-800"
          >
            Neka
          </button>
        </div>
      </div>
    </div>
  );
}
