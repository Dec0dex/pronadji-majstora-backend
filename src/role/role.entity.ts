import { Permission } from '../permission/permission.entity';
import { User } from '../user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/** It's a class that represents a role, and it has a name, permissions, users, and dates for when it
was created and updated. A Role can have many Permissions and many Users */
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Permission, (permissions) => permissions.roles, {
    nullable: true,
    eager: true,
  })
  @JoinTable()
  permissions: Permission[];

  @ManyToMany(() => User, (users) => users.roles, { nullable: true })
  users: User[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;
}
