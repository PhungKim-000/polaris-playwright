export function randomString(length = 8): string {
  return Math.random().toString(36).slice(2, 2 + length);
}

export function randomEmail(): string {
  return `user_${Date.now()}_${randomString(5)}@example.com`;
}
