import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  const updateGoogleConsent = (consent) => {
    if (typeof window.gtag !== "function") return;

    window.gtag("consent", "update", {
      analytics_storage: consent === "granted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  };

  useEffect(() => {
  const savedConsent = localStorage.getItem("cookieConsent");

  if (!savedConsent) {
    setShowBanner(true);
  } else {
    updateGoogleConsent(savedConsent);
  }

  const openCookieSettings = () => {
    setShowBanner(true);
  };

  window.addEventListener("open-cookie-settings", openCookieSettings);

  return () => {
    window.removeEventListener("open-cookie-settings", openCookieSettings);
  };
}, []);

  const acceptAnalytics = () => {
    localStorage.setItem("cookieConsent", "granted");
    updateGoogleConsent("granted");
    setShowBanner(false);
  };

  const rejectAnalytics = () => {
    localStorage.setItem("cookieConsent", "denied");
    updateGoogleConsent("denied");
    setShowBanner(false);
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
            onClick={acceptAnalytics}
            className="rounded-md bg-black px-4 py-2 text-white"
          >
            Godkänn statistik
          </button>

          <button
            onClick={rejectAnalytics}
            className="rounded-md border border-gray-400 px-4 py-2"
          >
            Neka
          </button>
        </div>
      </div>
    </div>
  );
}
