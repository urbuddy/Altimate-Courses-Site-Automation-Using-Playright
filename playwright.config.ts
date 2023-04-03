import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: Number(process.env.RETRIES),
  reporter: 'html',
  use: {
    headless: process.env.HEADLESS==='false'? false:true,
  },
  timeout: 60000,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
