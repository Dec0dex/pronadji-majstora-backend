import { IsNotEmpty, IsNumber } from 'class-validator';

export class AssignRoleUsersQuery {
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  userIds: number[];
}
