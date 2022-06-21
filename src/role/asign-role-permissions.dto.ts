import { IsNotEmpty, IsNumber } from 'class-validator';

export class AssignRolePermissionsQuery {
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  permissionIds: number[];
}
