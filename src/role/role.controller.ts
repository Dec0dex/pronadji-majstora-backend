import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';
import {
  AppAbility,
  CheckPolicies,
  PermissionAction,
} from 'src/auth/casl-ability.factory';
import { PoliciesGuard } from 'src/auth/policies.guard';
import { PageOptionsDto } from 'src/pagination/page-options.dto';
import { AssignRolePermissionsQuery } from './asign-role-permissions.dto';
import { AssignRoleUsersQuery } from './asign-role-users.dto';
import { RoleDto } from './role.dto';
import { RoleService } from './role.service';

@Controller('role')
@ApiTags('role')
@UseGuards(PoliciesGuard)
@UseGuards(ThrottlerGuard)
@ApiBearerAuth()
export class RoleController {
  @Inject()
  private roleService: RoleService;

  @Get()
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.READ, 'Role'),
  )
  findAllRoles(@Query() pageOptionsDto: PageOptionsDto) {
    return this.roleService.findAllRolesPageable(pageOptionsDto);
  }

  @Get(':id')
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.READ, 'Role'),
  )
  findRoleById(@Param('id') id: number) {
    return this.roleService.findRoleById(id);
  }

  @Delete(':id')
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.DELETE, 'Role'),
  )
  deleteRole(@Param('id') id: number) {
    return this.roleService.deleteRoleById(id);
  }

  @Post()
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.CREATE, 'Role'),
  )
  createRole(@Body() roleDto: RoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @Put()
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.UPDATE, 'Role'),
  )
  updateRole(@Body() roleDto: RoleDto) {
    return this.roleService.updateRole(roleDto);
  }

  @Post('assignPermissions')
  @Version('1')
  @Put()
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.UPDATE, 'Role'),
  )
  assignPermissions(@Query() queryParams: AssignRolePermissionsQuery) {
    return this.roleService.assignPermissions(
      queryParams.roleId,
      queryParams.permissionIds,
    );
  }

  @Post('assignUsers')
  @Version('1')
  @Put()
  @Version('1')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(PermissionAction.UPDATE, 'Role'),
  )
  assignUsers(@Query() queryParams: AssignRoleUsersQuery) {
    return this.roleService.assignUsers(
      queryParams.roleId,
      queryParams.userIds,
    );
  }
}
