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
  Version
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';
import {
  CheckPolicies
} from '../auth/casl-ability.factory';
import { PoliciesGuard } from '../auth/policies.guard';
import {
  CreatePermissionPolicyHandler,
  DeletePermissionPolicyHandler,
  ReadPermissionPolicyHandler,
  UpdatePermissionPolicyHandler
} from '../auth/policies/permission.policies';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PermissionDto } from './permission.dto';
import { PermissionService } from './permission.service';

@Controller('permission')
@ApiTags('permission')
@UseGuards(PoliciesGuard)
@UseGuards(ThrottlerGuard)
@ApiBearerAuth()
export class PermissionController {
  @Inject()
  private permissionService: PermissionService;

  @Get()
  @Version('1')
  @CheckPolicies(new ReadPermissionPolicyHandler())
  findAllPermissions(@Query() pageOptionsDto: PageOptionsDto) {
    return this.permissionService.findAllPermissionsPageable(pageOptionsDto);
  }

  @Get(':id')
  @Version('1')
  @CheckPolicies(new ReadPermissionPolicyHandler())
  findPermissionById(@Param('id') id: number) {
    return this.permissionService.findPermissionById(id);
  }

  @Delete(':id')
  @Version('1')
  @CheckPolicies(new DeletePermissionPolicyHandler())
  deletePermission(@Param('id') id: number) {
    return this.permissionService.deletePermissionById(id);
  }

  @Post()
  @Version('1')
  @CheckPolicies(new CreatePermissionPolicyHandler())
  createPermission(@Body() permissionDto: PermissionDto) {
    return this.permissionService.createPermission(permissionDto);
  }

  @Put()
  @Version('1')
  @CheckPolicies(new UpdatePermissionPolicyHandler())
  updatePermission(@Body() permissionDto: PermissionDto) {
    return this.permissionService.updatePermission(permissionDto);
  }
}
