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
  baseUrl: 'URL', // Replace with actual URL
  apiUrl: getEnv(''),
  email: 'email', // Replace with actual email
  password: 'Pwd', // Replace with actual password
  headless: getEnv('HEADLESS', 'true') === 'true'
};
