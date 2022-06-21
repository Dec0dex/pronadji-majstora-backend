import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import postgressConfig from './config/postgres.config';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(postgressConfig),
    HealthModule,
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
  ],
})
export class AppModule {}
