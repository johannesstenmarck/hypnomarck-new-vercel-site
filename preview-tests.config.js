import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',testMatch:'home-preview.spec.js',use:{baseURL:process.env.PREVIEW_URL||'http://127.0.0.1:4185',channel:'chrome'},workers:1});
