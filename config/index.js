import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

const config = Object.freeze({
  APP_WEBHOOK_PATH: env.APP_WEBHOOK_PATH || '/webhook'
});

export default config;