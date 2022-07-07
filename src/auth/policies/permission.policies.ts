import { Permission } from '../../permission/permission.entity';
import {
  AppAbility,
  IPolicyHandler,
  PermissionAction,
} from '../casl-ability.factory';

/** "If the user has the READ permission on the Permission resource, then they can read the Permission
resource."

The `handle` method is called by the `can` method of the `AppAbility` class. The `handle` method is
passed the `AppAbility` instance. The `handle` method returns a boolean value. If the value is true,
then the user has the permission. If the value is false, then the user does not have the permission */
export class ReadPermissionPolicyHandler implements IPolicyHandler {
  /**
   * If the user has the ability to read the Permission model, then they can read the Permission model
   * @param {AppAbility} ability - AppAbility - The ability object that is passed to the can function.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.READ, Permission);
  }
}

/** If the user has the ability to create a permission, then they can create a permission. */
export class CreatePermissionPolicyHandler implements IPolicyHandler {
  /**
   * "If the user has the ability to create a Permission, then they can create a Permission."
   *
   * The above function is a good example of how to use the `can` function. The `can` function takes
   * two parameters:
   *
   * 1. The action that the user is trying to perform.
   * 2. The resource that the user is trying to perform the action on
   * @param {AppAbility} ability - AppAbility - The ability object that is passed to the can() method.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.CREATE, Permission);
  }
}

/** If the user has the UPDATE permission on the Permission resource, then they can update permissions. */
export class UpdatePermissionPolicyHandler implements IPolicyHandler {
  /**
   * If the user has the ability to update permissions, then they can update permissions
   * @param {AppAbility} ability - AppAbility - This is the ability class that you created in the
   * previous step.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.UPDATE, Permission);
  }
}

/** If the user has the DELETE permission on the Permission resource, then they can delete a permission. */
export class DeletePermissionPolicyHandler implements IPolicyHandler {
  /**
   * "If the user has the ability to delete a Permission, then they can delete a Permission."
   *
   * The `can` function takes two parameters:
   *
   * 1. The action that the user is trying to perform.
   * 2. The resource that the user is trying to perform the action on
   * @param {AppAbility} ability - AppAbility - This is the ability object that is passed to the can
   * function.
   * @returns A boolean value.
   */
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.DELETE, Permission);
  }
}
