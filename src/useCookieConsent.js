import { useSyncExternalStore } from "react";

// Static rendering never reads a visitor's storage or starts third-party code.
const serverConsent = {
  subscribe: () => () => {},
  getSnapshot: () => null,
};
export const consent = typeof window === "undefined" ? serverConsent : window.siteConsent;

export function useCookieConsent() {
  return useSyncExternalStore(consent.subscribe, consent.getSnapshot, serverConsent.getSnapshot);
}
