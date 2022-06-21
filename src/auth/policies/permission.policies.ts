import { Permission } from '../../permission/permission.entity';
import {
  AppAbility,
  IPolicyHandler,
  PermissionAction,
} from '../casl-ability.factory';

export class ReadPermissionPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.READ, Permission);
  }
}

export class CreatePermissionPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.CREATE, Permission);
  }
}

export class UpdatePermissionPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.UPDATE, Permission);
  }
}

export class DeletePermissionPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.DELETE, Permission);
  }
}
