import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/** A configuration for typeorm for testing. */
const sqliteTestingConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',

  // entities name should be **.entity.ts
  entities: ['dist/src/**/*.entity.js'],

  // We are using migrations, synchronize should be set to false.
  // synchronize: process.env.TYPEORM_SYNCHRONIZE
  //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
  //  : false,
  synchronize: true,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  migrationsTableName: 'migrations_typeorm',
  migrations: ['dist/src/migrations/seed/*.js'],

  logging: false,
  // logger: 'advanced-console',

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  autoLoadEntities: true,
};

/* Exporting the sqqliteTestingConfig object. */
export default sqliteTestingConfig;
