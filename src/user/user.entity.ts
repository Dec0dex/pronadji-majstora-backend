/* It's a class that represents a user */
import { Address } from '../address/address.entity';
import { Role } from '../role/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/** A user can have many addresses and many roles */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  @Index()
  username: string;

  @Column({ unique: true })
  @Index()
  email: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ default: true })
  isAccountActivated: true;

  @Column()
  password: string;

  @Column({ nullable: true, default: null, type: 'date' })
  dateOfBirth: Date;

  @OneToMany(() => Address, (address) => address.user, {
    nullable: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  addresses: Address[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @ManyToMany(() => Role, (roles) => roles.users, {
    nullable: true,
    eager: true,
  })
  @JoinTable()
  roles: Role[];
}
