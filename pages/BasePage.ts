import { Locator, Page } from '@playwright/test';
import assert from 'node:assert';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  // Use assert to verify text content of a locator
  async verifyText(locator: Locator, expectedText: string) {
    const actualText = (await locator.textContent())?.trim();
    assert.strictEqual(
      actualText,
      expectedText,
      `Expected text to be "${expectedText}", but got "${actualText}"`
    );
  }
}
