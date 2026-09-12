// Only fixed event names are accepted. Never pass booking form values to GA.
export function trackBookingEvent(name) {
  if (!["booking_start", "generate_lead"].includes(name)) return;
  if (typeof window === "undefined") return;
  try {
    if (window.siteConsent?.getSnapshot() !== "granted") return;
    window.gtag?.("event", name, { form_id: "consultation" });
  } catch {
    // Optional measurement must never interrupt a booking.
  }
}
