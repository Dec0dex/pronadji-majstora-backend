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
  CreatePermissionPolicyHandler,
  DeletePermissionPolicyHandler,
  ReadPermissionPolicyHandler,
  UpdatePermissionPolicyHandler,
} from '../auth/policies/permission.policies';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PermissionDto } from './permission.dto';
import { PermissionService } from './permission.service';

/** This class is a REST controller that handles all the CRUD operations for the Permission entity */
@Controller('permission')
@ApiTags('permission')
@UseGuards(PoliciesGuard)
@UseGuards(ThrottlerGuard)
@ApiBearerAuth()
export class PermissionController {
  @Inject()
  private permissionService: PermissionService;

  /** This is a method that is called when a GET request is made to the /permission endpoint. */
  @Get()
  @Version('1')
  @CheckPolicies(new ReadPermissionPolicyHandler())
  findAllPermissions(@Query() pageOptionsDto: PageOptionsDto) {
    return this.permissionService.findAllPermissionsPageable(pageOptionsDto);
  }

  /** This is a method that is called when a GET request is made to the /permission/:id endpoint. */
  @Get(':id')
  @Version('1')
  @CheckPolicies(new ReadPermissionPolicyHandler())
  findPermissionById(@Param('id') id: number) {
    return this.permissionService.findPermissionById(id);
  }

  /** This is a method that is called when a DELETE request is made to the /permission/:id endpoint. */
  @Delete(':id')
  @Version('1')
  @CheckPolicies(new DeletePermissionPolicyHandler())
  deletePermission(@Param('id') id: number) {
    return this.permissionService.deletePermissionById(id);
  }

  /** This is a method that is called when a POST request is made to the /permission endpoint. */
  @Post()
  @Version('1')
  @CheckPolicies(new CreatePermissionPolicyHandler())
  createPermission(@Body() permissionDto: PermissionDto) {
    return this.permissionService.createPermission(permissionDto);
  }

  /** Updating the permission. */
  @Put()
  @Version('1')
  @CheckPolicies(new UpdatePermissionPolicyHandler())
  updatePermission(@Body() permissionDto: PermissionDto) {
    return this.permissionService.updatePermission(permissionDto);
  }
}
