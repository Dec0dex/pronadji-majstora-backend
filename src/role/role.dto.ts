import { IsNotEmpty } from 'class-validator';
import { Role } from './role.entity';

/** It's a DTO that represents a Role entity */
export class RoleDto {
  /** It's a property that is used to store the id of the role. */
  id: number | null;
  /** It's a property that is used to store the name of the role. */
  @IsNotEmpty()
  name: string;
  /** It's a property that is used to store the date when the role was created. */
  dateCreated: Date | null;
  /** It's a property that is used to store the date when the role was updated. */
  dateUpdated: Date | null;

  /**
   * It converts a RoleDto object to a Role object
   * @returns A Role object
   */
  toModel(): Role {
    const role = new Role();
    role.id = this.id;
    role.name = this.name;
    return role;
  }

  /**
   * It takes a Role object and copies the values of its properties to the properties of the current
   * object
   * @param {Role} role - Role - this is the model that we are converting from
   */
  fromModel(role: Role) {
    this.id = role.id;
    this.name = role.name;
    this.dateCreated = role.dateCreated;
    this.dateUpdated = role.dateUpdated;
  }
}
