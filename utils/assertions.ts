import { expect, APIResponse } from '@playwright/test';

export async function expectStatus(response: APIResponse, expectedStatus: number): Promise<void> {
  expect(response.status(), `Expected status ${expectedStatus} but got ${response.status()}`).toBe(expectedStatus);
}
