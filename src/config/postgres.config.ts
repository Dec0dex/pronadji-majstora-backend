import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import enviroment from '../../env';

/** A configuration for typeorm. */
const postgressConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: enviroment.POSTGRES_HOST, // localhost
  port: enviroment.POSTGRES_PORT, // 5432
  username: enviroment.POSTGRES_USERNAME, // databse login role username
  password: enviroment.POSTGRES_PASSWORD, // database login role password
  database: enviroment.POSTGRES_DATABASE, // db name

  // entities name should be **.entity.ts
  entities: ['dist/src/**/*.entity.js'],

  // We are using migrations, synchronize should be set to false.
  // synchronize: process.env.TYPEORM_SYNCHRONIZE
  //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
  //  : false,
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,

  logging: false,
  // logger: 'advanced-console',

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: ['dist/src/migrations/seed/*.js', 'dist/src/migrations/*.js'],
  autoLoadEntities: true,
  migrationsTableName: 'migrations_typeorm',
  cli: {
    migrationsDir: 'src/migrations',
  },
};

/* Exporting the postgressConfig object. */
export default postgressConfig;
