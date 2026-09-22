// Review-only branch: never load analytics or third-party social embeds.
window.siteConsent = { subscribe: () => () => {}, getSnapshot: () => 'denied', setChoice: () => {} };
