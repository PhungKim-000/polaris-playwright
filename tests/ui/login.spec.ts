import { ENV } from 'utils/env';
import { test } from '../../fixtures/ui.fixture';
import { LoginPage } from '../../pages/LoginPage';

test('TC1: First time login Polaris sucessfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const expectedMessage = "Polaris";

  await test.step('Step 1: Open login page', async () => {
    await loginPage.open();
  });

  await test.step('Step 2: Click Sign in with Microsoft', async () => {
    await loginPage.clickSignInMicrosoft();
  });
  
  await test.step('Step 3: Enter email', async () => {
    await loginPage.fillEmail(ENV.email);
  });

  await test.step('Step 4: Click Next button', async () => {
    await loginPage.clickNext();
  });

  await test.step('Step 5: Enter password', async () => {
    await loginPage.fillPassword(ENV.password);
  });

  await test.step('Step 6: Click Sign in button', async () => {
    await loginPage.clickSignIn();
  });

  await test.step('Step 7: Click Yes button to confirm stay signed in', async () => {
    await loginPage.clickConfirmYes();
  });

  await test.step('Step 8: Verify browser validation message', async () => {
    await loginPage.verifyBanner(expectedMessage);
  });

});


