import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import sqliteTestingConfig from './config/sqlite.config';
import { HealthModule } from '../src/health/health.module';
import request from 'supertest';
import { ThrottlerModule } from '@nestjs/throttler';

describe('HealthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        HealthModule,
        TypeOrmModule.forRoot(sqliteTestingConfig),
        ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('/api/health (GET)', async () => {
    return await request(app.getHttpServer()).get('/api/health').expect(503);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
