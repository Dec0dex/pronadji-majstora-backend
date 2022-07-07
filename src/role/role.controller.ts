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

/** It's a REST controller that handles CRUD operations for the Role entity */
@Controller('role')
@ApiTags('role')
@UseGuards(PoliciesGuard)
@UseGuards(ThrottlerGuard)
@ApiBearerAuth()
export class RoleController {
  @Inject()
  private roleService: RoleService;

  /**
   * It takes a query parameter, pageOptionsDto, and passes it to the
   * roleService.findAllRolesPageable() function
   * @param {PageOptionsDto} pageOptionsDto - PageOptionsDto
   * @returns A pageable list of roles.
   */
  @Get()
  @Version('1')
  @CheckPolicies(new ReadRolePolicyHandler())
  findAllRoles(@Query() pageOptionsDto: PageOptionsDto) {
    return this.roleService.findAllRolesPageable(pageOptionsDto);
  }

  /**
   * The function takes in a parameter called id, which is a number, and then returns the result of the
   * findRoleById function in the roleService
   * @param {number} id - The id of the role to be retrieved.
   * @returns The role with the given id.
   */
  @Get(':id')
  @Version('1')
  @CheckPolicies(new ReadRolePolicyHandler())
  findRoleById(@Param('id') id: number) {
    return this.roleService.findRoleById(id);
  }

  /**
   * It takes an id as a parameter, and then calls the deleteRoleById() function in the roleService
   * @param {number} id - The id of the role to be deleted.
   * @returns The deleteRoleById method is being called on the roleService.
   */
  @Delete(':id')
  @Version('1')
  @CheckPolicies(new DeleteRolePolicyHandler())
  deleteRole(@Param('id') id: number) {
    return this.roleService.deleteRoleById(id);
  }

  /**
   * The function takes a roleDto object as a parameter, and returns the result of the createRole
   * function in the roleService
   * @param {RoleDto} roleDto - This is the object that will be passed to the createRole() method.
   * @returns The createRole method is being returned.
   */
  @Post()
  @Version('1')
  @CheckPolicies(new CreateRolePolicyHandler())
  createRole(@Body() roleDto: RoleDto) {
    return this.roleService.createRole(roleDto);
  }

  /**
   * It takes a roleDto object as a parameter, and then passes it to the roleService.updateRole()
   * function
   * @param {RoleDto} roleDto - This is the object that will be passed to the method.
   * @returns The return type is a Promise of type Role.
   */
  @Put()
  @Version('1')
  @CheckPolicies(new UpdateRolePolicyHandler())
  updateRole(@Body() roleDto: RoleDto) {
    return this.roleService.updateRole(roleDto);
  }

  /**
   * It takes a roleId and an array of permissionIds as query parameters, and returns a boolean value
   * @param {AssignRolePermissionsQuery} queryParams - AssignRolePermissionsQuery
   * @returns The return type is a Promise of type Role.
   */
  @Post('assignPermissions')
  @Version('1')
  @CheckPolicies(new UpdateRolePolicyHandler())
  assignPermissions(@Query() queryParams: AssignRolePermissionsQuery) {
    return this.roleService.assignPermissions(
      queryParams.roleId,
      queryParams.permissionIds,
    );
  }

  /**
   * It takes a query parameter called `roleId` and an array of user ids called `userIds` and assigns the
   * users to the role
   * @param {AssignRoleUsersQuery} queryParams - AssignRoleUsersQuery
   * @returns The return type is a Promise of an array of Role objects.
   */
  @Post('assignUsers')
  @Version('1')
  @CheckPolicies(new UpdateRolePolicyHandler())
  assignUsers(@Query() queryParams: AssignRoleUsersQuery) {
    return this.roleService.assignUsers(
      queryParams.roleId,
      queryParams.userIds,
    );
  }
}
