import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { PermissionController } from './permission.controller';
import { Permission } from './permission.entity';
import { PermissionService } from './permission.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Permission])],
  providers: [PermissionService],
  controllers: [PermissionController],
})
export class PermissionModule {}
