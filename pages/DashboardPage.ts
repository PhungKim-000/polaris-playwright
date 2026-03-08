import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly articalTitle;

  constructor(page: Page) {
    super(page);
    this.articalTitle = page.getByRole('heading', { name: 'AutomationExercise' });
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.articalTitle).toBeVisible();
  }
  async verifyArticleTitle(expectedTitle: string): Promise<void> {
    await this.verifyText(this.articalTitle, expectedTitle);  
  }
}
