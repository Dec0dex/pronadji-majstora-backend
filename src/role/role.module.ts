import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Permission } from 'src/permission/permission.entity';
import { User } from 'src/user/user.entity';
import { RoleController } from './role.controller';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Role, User, Permission])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
