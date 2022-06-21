import { PermissionAction } from '../auth/casl-ability.factory';
import { Role } from '../role/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['action', 'resource'])
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: PermissionAction;

  @Column()
  resource: string;

  @ManyToMany(() => Role, (roles) => roles.permissions)
  roles: Role[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;
}
