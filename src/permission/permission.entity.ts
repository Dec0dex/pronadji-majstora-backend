import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { PermissionAction } from '../auth/casl-ability.factory';
import { Role } from '../role/role.entity';

/** It's a class that represents a permission, which is a combination of an action and a resource */
@Entity()
@Unique(['action', 'resource'])
export class Permission {
  /** It's a property that represents TypeORM primary key of the table. */
  @PrimaryGeneratedColumn()
  id: number;

  /** It's a property that tells TypeORM to create a column in the database table. This propperty holds information about permission action */
  @Column()
  action: PermissionAction;

  /** It's a property that tells TypeORM to create a column in the database table. This propperty holds
  information about permission resource */
  @Column()
  resource: string;

  /** It's a property that tells TypeORM to create a many to many relationship in the database. This propperty holds
    information about permission roles */
  @ManyToMany(() => Role, (roles) => roles.permissions)
  roles: Role[];

  /** It's a property that tells TypeORM to create a column in the database table. This propperty holds
information about date of creation */
  @CreateDateColumn()
  dateCreated: Date;

  /** It's a property that tells TypeORM to create a column in the database table. This propperty holds
  information about date of update */
  @UpdateDateColumn()
  dateUpdated: Date;
}
