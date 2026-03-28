import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { ENV } from 'utils/env';


export class LoginPage extends BasePage {
  readonly page: Page;
  readonly signInMicrosoftButton: Locator;
  readonly emailInput: Locator;
  readonly nextButton: Locator;
  readonly passwordInput: Locator;
  readonly confirmYesButton: Locator;
  readonly signInButton: Locator;
  readonly Banner: Locator;
  readonly avatarIcon: Locator;
  readonly signOutButton: Locator;
  readonly welcomeBanner: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.signInMicrosoftButton = page.locator("//button[normalize-space()='Sign in with Microsoft']");
    this.emailInput = page.locator("//input[@id='i0116']");
    this.nextButton = page.locator("//input[@id='idSIButton9']");
    this.passwordInput = page.locator("//input[@id='i0118']");
    this.signInButton = page.locator("//input[@id='idSIButton9']");
    this .confirmYesButton = page.locator("//input[@id='idSIButton9']");
    this.Banner = page.locator("//header//*[contains(text(),'Polaris')]");
    this.avatarIcon = page.locator("//header//*[contains(@aria-label,'User menu')]"); 
    this.signOutButton = page.locator("//button[normalize-space()='Sign out']");
    this.welcomeBanner = page.locator("//span[@class='text-4xl font-bold tracking-tight']");
  }

  async open() {
    await this.page.goto(ENV.baseUrl);
  }

  async clickSignInMicrosoft() {
    await this.signInMicrosoftButton.click();
  }
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }
  
  async clickNext() {
    await this.nextButton.click();
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async clickConfirmYes() {
    await this.confirmYesButton.click();
  }

  async verifyBanner(expectedMessage: string) {
    await this.verifyText(this.Banner, expectedMessage);
  }

  async clickAvatar() {
    await this.avatarIcon.click();
  }

  async clickSignOut() {
    await this.signOutButton.click();
  }

  async verifyWelcomeBanner(WelcomeMessage: string) {
    await this.verifyText(this.welcomeBanner, WelcomeMessage);
  }
}
