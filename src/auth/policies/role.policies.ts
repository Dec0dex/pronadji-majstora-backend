import { Role } from '../../role/role.entity';
import {
  AppAbility,
  IPolicyHandler,
  PermissionAction,
} from '../casl-ability.factory';

export class ReadRolePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.READ, Role);
  }
}

export class CreateRolePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.CREATE, Role);
  }
}

export class UpdateRolePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.UPDATE, Role);
  }
}

export class DeleteRolePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(PermissionAction.DELETE, Role);
  }
}
