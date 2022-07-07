import { IsNotEmpty, IsString } from 'class-validator';
import { PermissionAction } from '../auth/casl-ability.factory';
import { Permission } from './permission.entity';

/** It's a DTO that maps to a Permission entity */
export class PermissionDto {
  /** It's a property of the Permission entity that represents id */
  id: number | null;

  /** It's a property of the Permission entity that represents action */
  @IsNotEmpty()
  action: PermissionAction;

  /** It's a property of the Permission entity that represents resource */
  @IsNotEmpty()
  @IsString()
  resource: string;
  /** It's a property of the Permission entity that represents date of creation */
  dateCreated: Date | null;
  /** It's a property of the Permission entity that represents date of update */
  dateUpdated: Date | null;

  /**
   * It takes the data from the form and puts it into a new Permission object
   * @returns A Permission object
   */
  toModel(): Permission {
    const permission = new Permission();
    permission.id = this.id;
    permission.action = this.action;
    permission.resource = this.resource;
    return permission;
  }

  /**
   * It takes a Permission object and copies its properties to the current object
   * @param {Permission} permission - Permission - this is the model that we are converting from
   */
  fromModel(permission: Permission) {
    this.id = permission.id;
    this.action = permission.action;
    this.resource = permission.resource;
    this.dateCreated = permission.dateCreated;
    this.dateUpdated = permission.dateUpdated;
  }
}
