import { IsNotEmpty, IsString } from 'class-validator';
import { PermissionAction } from 'src/auth/casl-ability.factory';
import { Permission } from './permission.entity';

export class PermissionDto {
  id: number | null;
  @IsNotEmpty()
  action: PermissionAction;

  @IsNotEmpty()
  @IsString()
  resource: string;
  dateCreated: Date | null;
  dateUpdated: Date | null;

  toModel(): Permission {
    const permission = new Permission();
    permission.id = this.id;
    permission.action = this.action;
    permission.resource = this.resource;
    return permission;
  }

  fromModel(permission: Permission) {
    this.id = permission.id;
    this.action = permission.action;
    this.resource = permission.resource;
    this.dateCreated = permission.dateCreated;
    this.dateUpdated = permission.dateUpdated;
  }
}
