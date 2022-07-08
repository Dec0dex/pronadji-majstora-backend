import { Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { toNumberArray } from '../../src/util/cast.helper';

/** It's a class that defines the shape of the query parameters that will be passed to the
assignRoleUsers() method */
export class AssignRoleUsersQuery {
  /** It's a property that will be passed to the assignRoleUsers() method and represents the role id to assign users to. */
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  /** It's an array of numbers that represents the list of users to assign to role. */
  @Transform(({ value }) => toNumberArray(value))
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  userIds: number[];
}
