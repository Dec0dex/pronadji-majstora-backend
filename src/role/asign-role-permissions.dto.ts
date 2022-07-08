import { Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { toNumberArray } from '../../src/util/cast.helper';

/** It's a class that defines the shape of the data that will be sent to the server when a user assigns
permissions to a role */
export class AssignRolePermissionsQuery {
  /** It's a property that will be sent to the server when a user assigns permissions to a specific role id. */
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  /** It's an array of numbers that represnets permissions to be assigned to to the role. */
  @Transform(({ value }) => toNumberArray(value))
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  permissionIds: number[];
}
