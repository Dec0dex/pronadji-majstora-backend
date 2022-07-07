import { IsNotEmpty, IsNumber } from 'class-validator';

/** It's a class that defines the shape of the data that will be sent to the server when a user assigns
permissions to a role */
export class AssignRolePermissionsQuery {
  /** It's a property that will be sent to the server when a user assigns permissions to a specific role id. */
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  /** It's an array of numbers that represnets permissions to be assigned to to the role. */
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  permissionIds: number[];
}
