import { Role } from '../../role/role.entity';
import {
  AppAbility,
  IPolicyHandler,
  PermissionAction,
} from '../casl-ability.factory';

/** If the user has the READ permission on the Role resource, then they can read the role. */
export class ReadRolePolicyHandler implements IPolicyHandler {
  /**
   * "If the user has the READ permission on the Role resource, then they can read the Role resource."
   *
   * The ability.can() function takes two parameters:
   *
   * The first parameter is the action that the user is trying to perform
   * @param {AppAbility} ability - AppAbility - The ability object that is passed to the can function.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.READ, 'Role');
  }
}

/** If the user has the CREATE permission for the Role resource, then they can create a role. */
export class CreateRolePolicyHandler implements IPolicyHandler {
  /**
   * "If the user has the ability to create a role, then they can create a role."
   *
   * The `can` function takes two parameters:
   *
   * 1. The action that the user is trying to perform.
   * 2. The resource that the user is trying to perform the action on
   * @param {AppAbility} ability - AppAbility - The ability object that is passed to the can() method.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.CREATE, 'Role');
  }
}

/** If the user has the UPDATE permission on the Role resource, then they can update a role. */
export class UpdateRolePolicyHandler implements IPolicyHandler {
  /**
   * "If the user has the UPDATE permission on the Role resource, then they can update the role."
   *
   * The ability.can() function takes two parameters:
   *
   * The first parameter is the action that the user is trying to perform. In this case, the user is
   * trying to update the role.
   * The second parameter is the resource that the user is trying to perform the action on. In this
   * case, the user is trying to update the role resource.
   * The ability.can() function returns a boolean value. If the user has the UPDATE permission on the
   * Role resource, then the function returns true. If the user does not have the UPDATE permission on
   * the Role resource, then the function returns false
   * @param {AppAbility} ability - AppAbility - The ability object that is passed to the can function.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.UPDATE, 'Role');
  }
}

/** If the user has the DELETE permission on the Role resource, then they can delete a role. */
export class DeleteRolePolicyHandler implements IPolicyHandler {
  /**
   * "If the user has the ability to delete a role, then they can delete a role."
   *
   * The `can` function takes two parameters:
   *
   * 1. The action that the user is trying to perform.
   * 2. The subject that the user is trying to perform the action on
   * @param {AppAbility} ability - AppAbility - The ability object that is passed to the can function.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.DELETE, 'Role');
  }
}
