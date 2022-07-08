import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';
import { PermissionAction } from '../src/auth/casl-ability.factory';
import { TokenDto } from '../src/auth/token.dto';
import { PermissionModule } from '../src/permission/permission.module';
import sqliteTestingConfig from './config/sqlite.config';

describe('PermissionController (e2e)', () => {
  let app: INestApplication;
  let token: TokenDto;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        PermissionModule,
        TypeOrmModule.forRoot(sqliteTestingConfig),
        ConfigModule.forRoot({ isGlobal: true }),
        ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  beforeEach(async () => {
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ usernameOrEmail: 'admin', password: 'admin' })
      .expect(({ body }) => {
        token = body;
      });
  });

  it('/api/permission (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/permission')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/permission/:id (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/permission/1')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/permission/:id (DELETE)', async () => {
    await request(app.getHttpServer())
      .delete('/api/permission/2')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/permission (POST)', async () => {
    await request(app.getHttpServer())
      .post('/api/permission')
      .send({ action: PermissionAction.READ, resource: 'Test' })
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(201);
  });

  it('/api/permission (PUT)', async () => {
    await request(app.getHttpServer())
      .put('/api/permission')
      .send({ id: 1, action: PermissionAction.UPDATE, resource: 'Test' })
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
