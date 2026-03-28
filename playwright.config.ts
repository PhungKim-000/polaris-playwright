import { defineConfig, devices } from '@playwright/test';
import { ENV } from './utils/env';

export default defineConfig({
  testDir: './tests',
  timeout: 300_000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'],['html', { outputFolder: 'playwright-report', open: 'never' }],],
  use: {
    baseURL: ENV.baseUrl,
    headless: ENV.headless,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    // Setup for Chromium
    {
      name: 'setup-chromium',
      testMatch: /.*auth\/login\.setup\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Login business test on Chromium - NO storage
    {
      name: 'chromium',
      testMatch: /.*ui\/login\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Logout business test on Chromium - USE storage
    {
      name: 'chromium',
      testMatch: /.*ui\/logout\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/chromium.json',
      },
      dependencies: ['setup-chromium'],
    },

    // Setup for Edge
    {
      name: 'setup-edge',
      testMatch: /.*auth\/login\.setup\.spec\.ts/,
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },

    // Login business test on Edge - NO storage
    {
      name: 'Microsoft Edge',
      testMatch: /.*ui\/login\.spec\.ts/,
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },

    // Logout business test on Edge - USE storage
    {
      name: 'Microsoft Edge',
      testMatch: /.*ui\/logout\.spec\.ts/,
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        storageState: 'playwright/.auth/edge.json',
      },
      dependencies: ['setup-edge'],
    },
  ],
});
