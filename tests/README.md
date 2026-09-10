# Consent regression checks

Run `npm ci`, `npx playwright install chromium`, then `npm test`. The test runner
builds the site and starts Vite preview. There was no test or lint command before
this change.

To use an installed Chrome browser, set `PLAYWRIGHT_CHANNEL=chrome`. To test an
already running production preview, set `CONSENT_PREVIEW_URL` to its origin;
build and start that preview first. This also avoids Windows process-tree
shutdown issues with a runner-managed npm server.

The tests serve the built files under `https://www.hypnomarck.se` inside an
isolated browser context. Google and EmbedSocial responses are mocked and all
other third-party requests are blocked. Cookie domain/path handling is performed
by Chromium, not a simulated cookie jar. No test analytics are sent.

Coverage includes fresh and saved denial, legacy-cookie removal, host/domain
and path cookies, acceptance and withdrawal, re-acceptance, blocked storage,
a pending Google download, cross-tab revocation, fallback cards, and preservation
of the YouTube privacy-enhanced hostname.

## Implementation notes

`public/consent.js` initializes synchronously from `index.html` before React.
It owns persistence, the Google consent queue, cookie removal, and subscriptions.
React uses `useSyncExternalStore` to avoid a separate localStorage/state/event
implementation in each component. The Vercel rewrite explicitly excludes the
bootstrap script.

Google now uses basic consent loading: the tag itself is requested only after
an explicit or previously saved grant. This removes pre-consent cookieless GA
pings as well as preventing GA cookies. Advertising consent remains denied.

Withdrawal disables Google collection, queues denied consent, expires visible
`_ga` and `_ga_*` cookies across host and ancestor-domain scopes and the current
ancestor paths, then reloads any document that started an external service.
The next denied document also removes legacy cookies before loading React.
This site's Google cookies were observed at `.hypnomarck.se`, path `/`.
JavaScript cannot enumerate cookie attributes or delete another host's host-only
cookies, HttpOnly cookies, or third-party cookies. These are not the observed GA4
cookies addressed by this change.

localStorage remains the normal source (`cookieConsent`: `granted` / `denied`).
sessionStorage is a fallback if writing localStorage fails. Reads fail closed.
If both storage mechanisms reject writes while still exposing an old grant,
the page stays denied in memory instead of reloading into that stale grant;
full third-party script teardown cannot be guaranteed in that exceptional case.

## Copy follow-up (not changed)

The Swedish banner currently describes only optional statistics cookies, while
the same choice also enables Instagram content through EmbedSocial. The banner
and associated privacy information should describe both services/purposes and
explain that rejection leaves replacement cards. Consider separate controls for
statistics and external content in a later UX change. Do not imply that a denied
visit makes no third-party connections at all: YouTube remains embedded using
`youtube-nocookie.com`.
