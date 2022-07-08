import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';
import { TokenDto } from '../src/auth/token.dto';
import { User } from '../src/user/user.entity';
import sqliteTestingConfig from './config/sqlite.config';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let token: TokenDto;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        TypeOrmModule.forRoot(sqliteTestingConfig),
        ConfigModule.forRoot({ isGlobal: true }),
        ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
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

  it('/api/auth/login (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ usernameOrEmail: 'admin', password: 'admin' })
      .expect(201)
      .expect(({ body }) => {
        expect(body as TokenDto).toBeDefined();
      });
  });

  it('/api/auth/me (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/auth/me')
      .set({ Authorization: 'Bearer ' + token.access_token })
      .expect(200)
      .expect(({ body }) => {
        expect(body as User).toBeDefined();
      });
  });

  it('/api/auth/refreshToken (POST)', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/refreshToken')
      .send({ refresh_token: token.refresh_token })
      .expect(201)
      .expect(({ body }) => {
        expect(body as TokenDto).toBeDefined();
      });
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
