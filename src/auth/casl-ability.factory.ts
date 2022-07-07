import { Ability } from '@casl/ability';
import { Injectable, SetMetadata } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';
import { User } from '../user/user.entity';

/** Defining the actions that can be performed on a resource. */
export enum PermissionAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  MANAGE = 'manage',
}

/** Defining the type of the second argument of the `Ability` class. */
export type PermissionObjectType = any;
/** Defining the type of the third argument of the `Ability` class. */
export type AppAbility = Ability<[PermissionAction, PermissionObjectType]>;
/** Defining the interface that is used to represent CaslPermission */
interface CaslPermission {
  /** The action for the resource that the permission is for. */
  action: PermissionAction;
  // In our database, Invoice, Project... are called "object"
  // but in CASL they are called "subject"
  /** The name of the resource that the permission is for. */
  subject: string;
}
/** It takes a user object and returns a Casl ability object */
@Injectable()
export class CaslAbilityFactory {
  /**
   * It takes a user and returns an ability object that contains all the permissions that the user has
   * @param {User} user - User - the user for whom we want to create the ability
   * @returns An instance of the Ability class.
   */
  async createForUser(user: User): Promise<AppAbility> {
    const dbPermissions: Permission[] = user.roles.reduce(
      (acc, it) => [...acc, ...it.permissions],
      [],
    );
    const caslPermissions: CaslPermission[] = dbPermissions.map((p) => ({
      action: p.action,
      subject: p.resource,
    }));
    return new Ability<[PermissionAction, PermissionObjectType]>(
      caslPermissions,
    );
  }
}

/** Defining an interface that is used to create a policy handler. */
export interface IPolicyHandler {
  /** A method that is used to check if the user has the permission to perform the action on the
  resource. */
  handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

/** Defining a type that is used to create a policy handler. */
export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

/** A constant that is used to store the metadata of the decorated class or method. */
export const CHECK_POLICIES_KEY = 'check_policy';
/**
 * It takes a list of policy handlers and adds them to the metadata of the decorated class or method
 * @param {PolicyHandler[]} handlers - PolicyHandler[] - An array of policy handlers.
 */
export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_POLICIES_KEY, handlers);
