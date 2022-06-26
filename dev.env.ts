/**
 * Constant that represents object that holds all the enviroment variables for development enviroment
 */
const enviroment = {
  APP_NAME: 'PronadjiMajstora Backend',
  APP_DESCRIPTION: 'Backend for PronadjiMajstora application',
  APP_VERSION: '1.0.0',
  APP_PORT: 3000,
  APP_URL: 'https://pronadjimajstora.rs',
  APP_MODE: 'DEV',
  APP_DOCUMENTATION_PATH: 'api/docs',
  RATE_LIMIT_LIFE: 60,
  RATE_LIMIT: 40,
  ACCESS_TOKEN_SECRET: 'SuP3rS3cr3T0k3N',
  REFRESH_TOKEN_SECRET: 'Sup3rR3fr3shT0k3nS3cr3T',
  ACCESS_TOKEN_EXPIRATION_TIME: 900,
  REFRESH_TOKEN_EXPIRATION_TIME: 3600,
  POSTGRES_HOST: 'localhost',
  POSTGRES_PORT: 5432,
  POSTGRES_USERNAME: 'postgres',
  POSTGRES_PASSWORD: 'postgres',
  POSTGRES_DATABASE: 'pronadjimajstora',
};

export default enviroment;
