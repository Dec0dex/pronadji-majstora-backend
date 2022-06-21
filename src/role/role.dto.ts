import { IsNotEmpty } from 'class-validator';
import { Role } from './role.entity';

export class RoleDto {
  id: number | null;
  @IsNotEmpty()
  name: string;
  dateCreated: Date | null;
  dateUpdated: Date | null;

  toModel(): Role {
    const role = new Role();
    role.id = this.id;
    role.name = this.name;
    return role;
  }

  fromModel(role: Role) {
    this.id = role.id;
    this.name = role.name;
    this.dateCreated = role.dateCreated;
    this.dateUpdated = role.dateUpdated;
  }
}
