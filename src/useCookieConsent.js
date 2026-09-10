import { useSyncExternalStore } from "react";

export const consent = window.siteConsent;

export function useCookieConsent() {
  return useSyncExternalStore(consent.subscribe, consent.getSnapshot);
}
