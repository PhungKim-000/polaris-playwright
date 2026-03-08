import * as path from 'path';
import dotenv from 'dotenv';

const targetEnv = process.env.TEST_ENV || 'dev';
const envFilePath = path.resolve(process.cwd(), 'config', 'env', `.env.${targetEnv}`);

dotenv.config({ path: envFilePath });

function getEnv(name: string, fallback = ''): string {
  return process.env[name] ?? fallback;
}

export const ENV = {
  testEnv: targetEnv,
  baseUrl: 'https://automationexercise.com/login',
  apiUrl: getEnv('API_URL'),
  username: getEnv('USERNAME'),
  password: getEnv('PASSWORD'),
  headless: getEnv('HEADLESS', 'true') === 'true'
};
