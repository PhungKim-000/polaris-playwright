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
  baseUrl: 'URL',
  apiUrl: getEnv('API_URL'),
  email: 'email',
  password: 'pwd',
  headless: getEnv('HEADLESS', 'true') === 'true'
};
