import { test } from '../../fixtures/ui.fixture';
import { LoginPage } from '../../pages/LoginPage';

test('login failed with invalid email format', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const email = 'nguyen';
  const password = 'abc';
  const expectedMessage = "Please include an '@' in the email address";

  await test.step('Step 1: Open login page', async () => {
    await loginPage.open();
  });

  await test.step('Step 2: Enter invalid email and password', async () => {
    await loginPage.login(email, password);
  });

  await test.step('Step 3: Verify browser validation message', async () => {
    await loginPage.verifyEmailValidationMessage(expectedMessage);
  });
});

test('login failed with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const email = 'oop@gmail.com';
  const password = 'abc';
  const expectedMessage = 'Your email or password is incorrect!';

  await test.step('Step 1: Open login page', async () => {
    await loginPage.open();
  });

  await test.step('Step 2: Enter valid email and wrong password', async () => {
    await loginPage.login(email, password);
  });

  await test.step('Step 3: Verify login error message', async () => {
    await loginPage.verifyError(expectedMessage);
  });
});

test.describe('Login with valid credentials', () => {
  test.beforeEach(async ({ page, dashboardPage }) => {
    const loginPage = new LoginPage(page);
    const email = 'oop@gmail.com';
    const password = '123';

    await test.step('Step 1: Open login page', async () => {
      await loginPage.open();
    });

    await test.step('Step 2: Login with valid credentials', async () => {
      await loginPage.login(email, password);
    });

    await test.step('Step 3: Verify dashboard is loaded', async () => {
      await dashboardPage.verifyLoaded();
    });
  });

  test('should display article on dashboard', async ({ dashboardPage }) => {
    const expectedMessage = 'AutomationExercise';

    await test.step('Step 4: Verify article title on dashboard', async () => {
      await dashboardPage.verifyArticleTitle(expectedMessage);
    });
  });
});