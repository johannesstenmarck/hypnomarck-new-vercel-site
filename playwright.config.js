import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: process.env.CONSENT_PREVIEW_URL || "http://127.0.0.1:4173",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
  },
  webServer: process.env.CONSENT_PREVIEW_URL ? undefined : {
    command: "npm run build && npm run preview -- --host 127.0.0.1",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: false,
  },
});
