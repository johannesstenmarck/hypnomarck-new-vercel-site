// Runs synchronously before React or any Google tag can load.
(() => {
  const key = "cookieConsent";
  const measurementId = "G-L1S93XFX4K";
  const listeners = new Set();
  const normalize = (value) => value === "granted" || value === "denied" ? value : null;
  const readChoice = () => {
    try {
      // A session fallback also prevents an old grant surviving a failed write.
      return normalize(sessionStorage.getItem(key)) || normalize(localStorage.getItem(key));
    } catch {
      return null; // Storage unavailable: never assume consent.
    }
  };
  let choice = readChoice();
  let googleStarted = false;
  let externalContentStarted = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  const googleConsent = (value) => ({
    analytics_storage: value === "granted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "default", googleConsent(choice));

  function deleteAnalyticsCookies() {
    const names = new Set(document.cookie.split(";").map((cookie) => cookie.split("=")[0].trim())
      .filter((name) => name === "_ga" || name.startsWith("_ga_")));
    // document.cookie exposes names, not scope. Expire both host-only cookies
    // and domain cookies, including hypnomarck.se / .hypnomarck.se on www.
    const domains = [""];
    const parts = window.location.hostname.split(".");
    for (let i = 0; i < parts.length - 1; i += 1) {
      const domain = parts.slice(i).join(".");
      domains.push(`; Domain=${domain}`, `; Domain=.${domain}`);
    }
    // GA defaults to /; also cover cookies created on ancestor paths.
    const paths = new Set(["/"]);
    const segments = window.location.pathname.split("/").filter(Boolean);
    for (let i = 1; i <= segments.length; i += 1) {
      const path = `/${segments.slice(0, i).join("/")}`;
      paths.add(path);
      paths.add(`${path}/`);
    }
    for (const name of names) {
      for (const domain of domains) {
        for (const path of paths) {
          document.cookie = `${name}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}${domain}`;
        }
      }
    }
  }

  function startGoogle() {
    window[`ga-disable-${measurementId}`] = false;
    if (googleStarted) return;
    googleStarted = true;
    window.gtag("js", new Date());
    window.gtag("config", measurementId);
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  function applyChoice(value) {
    choice = value;
    // Disable collection immediately, even when gtag.js is still downloading.
    window[`ga-disable-${measurementId}`] = value !== "granted";
    window.gtag("consent", "update", googleConsent(value));
    if (value === "granted") startGoogle();
    else deleteAnalyticsCookies();
    listeners.forEach((listener) => listener());
    if (value !== "granted" && (googleStarted || externalContentStarted)) {
      // Removing a script element cannot undo its timers/listeners/requests.
      // Only reload when the next document cannot restore a stale grant.
      if (readChoice() !== "granted") window.location.reload();
    }
  }

  window.siteConsent = {
    getSnapshot: () => choice,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setChoice(value) {
      if (!normalize(value)) throw new Error("Invalid consent choice");
      try {
        localStorage.setItem(key, value);
        sessionStorage.removeItem(key);
      } catch {
        try { sessionStorage.setItem(key, value); } catch { /* In-memory choice remains usable. */ }
      }
      applyChoice(value);
    },
    markExternalContentStarted() { externalContentStarted = true; },
  };

  window.addEventListener("storage", (event) => {
    if (event.storageArea === localStorage && (event.key === key || event.key === null)) {
      try { sessionStorage.removeItem(key); } catch { /* Fail closed below. */ }
      applyChoice(readChoice());
    }
  });
  // Reconcile a document restored from the back/forward cache with other tabs.
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) applyChoice(readChoice());
  });

  if (choice === "granted") startGoogle();
  else {
    window[`ga-disable-${measurementId}`] = true;
    deleteAnalyticsCookies();
  }
})();
