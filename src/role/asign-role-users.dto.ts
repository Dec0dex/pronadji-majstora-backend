import { IsNotEmpty, IsNumber } from 'class-validator';

/** It's a class that defines the shape of the query parameters that will be passed to the
assignRoleUsers() method */
export class AssignRoleUsersQuery {
  /** It's a property that will be passed to the assignRoleUsers() method and represents the role id to assign users to. */
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  /** It's an array of numbers that represents the list of users to assign to role. */
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  userIds: number[];
}
