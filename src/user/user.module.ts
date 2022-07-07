import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../address/address.entity';
import { Permission } from '../permission/permission.entity';
import { Role } from '../role/role.entity';
import { User } from './user.entity';
import { UserService } from './user.service';

/** This class is a module that imports the TypeOrmModule.forFeature() method, which is a method that
takes an array of entities as an argument */
@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Role, Permission])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
