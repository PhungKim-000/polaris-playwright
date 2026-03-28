import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('TC2: Logout Polaris successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const WelcomeMessage = "Polaris";

  await loginPage.open();

  await test.step('Step 1: Click on Avatar', async () => {
    await loginPage.clickAvatar();
  });

  await test.step('Step 2: Click Sign out button', async () => {
    await loginPage.clickSignOut();
  });

  await test.step('Step 3: Verify user is logged out', async () => {
    await loginPage.verifyWelcomeBanner(WelcomeMessage);
  });
});