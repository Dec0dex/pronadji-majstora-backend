import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import postgressConfig from './config/postgres.config';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(postgressConfig),
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
    HealthModule,
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
  ],
})
export class AppModule {}
