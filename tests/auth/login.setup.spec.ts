import { test as setup } from '@playwright/test';
import { ENV } from 'utils/env';
import { LoginPage } from '../../pages/LoginPage';
import path from 'path/win32';
import fs from 'fs';

setup('Authenticate and save session', async ({ page, context }, testInfo) => {
  const loginPage = new LoginPage(page);

  const authDir = path.resolve('playwright/.auth');
  fs.mkdirSync(authDir, { recursive: true });

  const projectName = testInfo.project.name.toLowerCase();

  const authFile = projectName.includes('edge')
    ? path.join(authDir, 'edge.json')
    : path.join(authDir, 'chromium.json');

  await loginPage.open();
  await loginPage.clickSignInMicrosoft();
  await loginPage.fillEmail(ENV.email);
  await loginPage.clickNext();
  await loginPage.fillPassword(ENV.password);
  await loginPage.clickSignIn();
  await loginPage.clickConfirmYes();

  await context.storageState({ path: authFile });
});