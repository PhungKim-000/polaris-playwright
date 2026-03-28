# Playwright Framework

A lightweight Playwright framework using **Page Object Model (POM)** for small UI automation projects.

## Purpose

- Separate test flow from locators and page actions
- Improve maintainability when UI changes
- Reuse logic with `BasePage` and custom fixtures
- Support multiple browsers
- Keep config, session, and test data organized

## Structure

```text
playwright-framework/
├─ pages/          # POM layer: locators, actions, page-specific verification
│  ├─ BasePage.ts
│  ├─ LoginPage.ts
│  └─ DashboardPage.ts
├─ tests/
│  └─ ui/          # Test cases: only test flow and assertions
├─ fixtures/       # Inject reusable page objects into tests
├─ data/           # Reusable test data
├─ utils/          # Shared helpers
├─ config/env/     # Environment files
├─ auth/           # Saved session state
├─ playwright.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## POM Flow

This framework is built around **Page Object Model**:

```text
spec.ts -> fixture -> page object -> browser page
```

- `tests/` contains the **test flow**
- `pages/` contains the **UI logic**
- `fixtures/` provides ready-to-use page objects


## Run Commands

```bash
npm install
npx playwright install
npm run test
npm run test:ui
npm run test:debug
npm run test:headed
npx playwright show-report
npm run zip-report
```

## Browsers

Configured projects:

- `chromium`
- `firefox`
- `webkit`
- `Microsoft Edge`

Run a specific browser:

```bash
npx playwright test --project=chromium
```

## Test Report

Playwright generates an HTML report after execution.

Open the report with:

```bash
npx playwright show-report
```

Generated output is usually stored in:

```text
playwright-report/
test-results/
```

## Best Practice

- Keep locators inside `pages/`
- Keep test flow inside `tests/`
- Keep reusable page setup inside `fixtures/`
- Keep valid reusable data inside `data/`
- Keep invalid inputs directly in `.spec.ts`

## Summary

This framework emphasizes **POM** by separating:

- `tests/` -> test cases
- `pages/` -> page objects
- `fixtures/` -> reusable page instances
- `utils/` -> shared helpers
- `data/` -> test data

The result is a clean, reusable, and scalable Playwright project.
