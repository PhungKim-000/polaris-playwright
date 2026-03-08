import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { ENV } from 'utils/env';


export class LoginPage extends BasePage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Your email or password is');
  }

  async open() {
    await this.page.goto(ENV.baseUrl);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async getEmailValidationMessage() {
    return await this.emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
  }

  async verifyEmailValidationMessage(expectedMessage: string) {
    const actualMessage = await this.getEmailValidationMessage();
    expect(actualMessage).toContain(expectedMessage);
  }

  async verifyError(expectedMessage: string) {
    await this.verifyText(this.errorMessage, expectedMessage);
  }
}
