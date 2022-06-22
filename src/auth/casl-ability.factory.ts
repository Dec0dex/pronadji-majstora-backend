import { Ability } from '@casl/ability';
import { Injectable, SetMetadata } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';
import { User } from '../user/user.entity';

export enum PermissionAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  MANAGE = 'manage',
}

export type PermissionObjectType = any;
export type AppAbility = Ability<[PermissionAction, PermissionObjectType]>;
interface CaslPermission {
  action: PermissionAction;
  // In our database, Invoice, Project... are called "object"
  // but in CASL they are called "subject"
  subject: string;
}
@Injectable()
export class CaslAbilityFactory {
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

export interface IPolicyHandler {
  handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

export const CHECK_POLICIES_KEY = 'check_policy';
export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_POLICIES_KEY, handlers);
