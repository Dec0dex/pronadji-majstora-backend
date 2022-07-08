import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';
import { TokenDto } from '../src/auth/token.dto';
import { RoleModule } from '../src/role/role.module';
import sqliteTestingConfig from './config/sqlite.config';

describe('RoleController (e2e)', () => {
  let app: INestApplication;
  let token: TokenDto;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        RoleModule,
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

  it('/api/role (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/role')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/role/:id (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/role/1')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/role (POST)', async () => {
    await request(app.getHttpServer())
      .post('/api/role')
      .send({ name: 'Test' })
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(201);
  });

  it('/api/role (PUT)', async () => {
    await request(app.getHttpServer())
      .put('/api/role')
      .send({ id: 2, name: 'Test1' })
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/role/assignPermissions (PUT)', async () => {
    await request(app.getHttpServer())
      .put('/api/role/assignPermissions?roleId=2&permissionIds=1,3')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/role/assignUsers (PUT)', async () => {
    await request(app.getHttpServer())
      .put('/api/role/assignUsers?roleId=2&userIds=1')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);
  });

  it('/api/role/:id (DELETE)', async () => {
    await request(app.getHttpServer())
      .delete('/api/role/2')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200);

    await request(app.getHttpServer())
      .get('/api/role/2')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(404);
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
