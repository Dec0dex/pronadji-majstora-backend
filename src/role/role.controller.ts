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
import { CheckPolicies } from '../auth/casl-ability.factory';
import { PoliciesGuard } from '../auth/policies.guard';
import {
  CreateRolePolicyHandler,
  DeleteRolePolicyHandler,
  ReadRolePolicyHandler,
  UpdateRolePolicyHandler,
} from '../auth/policies/role.policies';
import { PageOptionsDto } from '../pagination/page-options.dto';
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
  @CheckPolicies(new ReadRolePolicyHandler())
  findAllRoles(@Query() pageOptionsDto: PageOptionsDto) {
    return this.roleService.findAllRolesPageable(pageOptionsDto);
  }

  @Get(':id')
  @Version('1')
  @CheckPolicies(new ReadRolePolicyHandler())
  findRoleById(@Param('id') id: number) {
    return this.roleService.findRoleById(id);
  }

  @Delete(':id')
  @Version('1')
  @CheckPolicies(new DeleteRolePolicyHandler())
  deleteRole(@Param('id') id: number) {
    return this.roleService.deleteRoleById(id);
  }

  @Post()
  @Version('1')
  @CheckPolicies(new CreateRolePolicyHandler())
  createRole(@Body() roleDto: RoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @Put()
  @Version('1')
  @CheckPolicies(new UpdateRolePolicyHandler())
  updateRole(@Body() roleDto: RoleDto) {
    return this.roleService.updateRole(roleDto);
  }

  @Post('assignPermissions')
  @Version('1')
  @Put()
  @Version('1')
  @CheckPolicies(new UpdateRolePolicyHandler())
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
  @CheckPolicies(new UpdateRolePolicyHandler())
  assignUsers(@Query() queryParams: AssignRoleUsersQuery) {
    return this.roleService.assignUsers(
      queryParams.roleId,
      queryParams.userIds,
    );
  }
}
