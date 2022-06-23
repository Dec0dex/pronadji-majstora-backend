import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PermissionDto } from 'src/permission/permission.dto';
import { PoliciesGuard } from '../auth/policies.guard';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { AssignRolePermissionsQuery } from './asign-role-permissions.dto';
import { AssignRoleUsersQuery } from './asign-role-users.dto';
import { RoleController } from './role.controller';
import { RoleDto } from './role.dto';
import { RoleService } from './role.service';

describe('RoleController', () => {
  let controller: RoleController;
  const mockThrottlerGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockPoliciesGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockRoleService = {
    findAllRolesPageable: jest.fn((pageOptionsDto: PageOptionsDto) => {
      const itemCount = 0;
      const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
      return new PageDto([], pageMetaDto);
    }),
    findRoleById: jest.fn((id: number) => {
      const result = new RoleDto();
      result.id = id;
      return result;
    }),

    deleteRoleById: jest.fn((id: number) => {
      return { id: id };
    }),

    createRole: jest.fn((dto: RoleDto) => {
      return dto;
    }),

    updateRole: jest.fn((dto: RoleDto) => {
      return dto;
    }),

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    assignPermissions: jest.fn((roleId: number, _permissionIds: number[]) => {
      const result = new RoleDto();
      result.id = roleId;
      return result;
    }),

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    assignUsers: jest.fn((roleId: number, _userIds: number[]) => {
      const result = new RoleDto();
      result.id = roleId;
      return result;
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [RoleService],
    })
      .overrideProvider(RoleService)
      .useValue(mockRoleService)
      .overrideGuard(ThrottlerGuard)
      .useValue(mockThrottlerGuard)
      .overrideGuard(PoliciesGuard)
      .useValue(mockPoliciesGuard)
      .compile();

    controller = module.get<RoleController>(RoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should ensure that the guards are applied to the controller', async () => {
    const guards = Reflect.getMetadata('__guards__', RoleController);
    const throttlerGuard = new guards[0]();
    const policiesGuard = new guards[1]();

    expect(throttlerGuard).toBeInstanceOf(ThrottlerGuard);
    expect(policiesGuard).toBeInstanceOf(PoliciesGuard);
  });

  it('should return list of roles', async () => {
    const pageOptionsDto = new PageOptionsDto();
    const itemCount = 0;
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    const expectedResult = new PageDto([], pageMetaDto);
    expect(controller.findAllRoles(pageOptionsDto)).toEqual(expectedResult);
    expect(mockRoleService.findAllRolesPageable).toHaveBeenCalledWith(
      pageOptionsDto,
    );
  });

  it('should return role with id', async () => {
    const result = new RoleDto();
    result.id = 1;
    expect(controller.findRoleById(1)).toEqual(result);
    expect(mockRoleService.findRoleById).toHaveBeenCalledWith(1);
  });

  it('should delete role with id', async () => {
    expect(controller.deleteRole(1)).toEqual({ id: 1 });
    expect(mockRoleService.deleteRoleById).toHaveBeenCalledWith(1);
  });

  it('should create role', async () => {
    const dto = new RoleDto();
    expect(controller.createRole(dto)).toEqual(dto);
    expect(mockRoleService.createRole).toHaveBeenCalledWith(dto);
  });

  it('should update Role', async () => {
    const dto = new RoleDto();
    dto.id = 1;
    expect(controller.updateRole(dto)).toEqual(dto);
    expect(mockRoleService.updateRole).toHaveBeenLastCalledWith(dto);
  });

  it('should assign permission to role', async () => {
    const request = new AssignRolePermissionsQuery();
    request.permissionIds = [1];
    request.roleId = 1;
    const expectedResult = new RoleDto();
    expectedResult.id = 1;
    expect(controller.assignPermissions(request)).toEqual(expectedResult);
    expect(mockRoleService.assignPermissions).toHaveBeenCalledWith(
      request.roleId,
      request.permissionIds,
    );
  });

  it('should assign user to role', async () => {
    const request = new AssignRoleUsersQuery();
    request.userIds = [1];
    request.roleId = 1;
    const expectedResult = new RoleDto();
    expectedResult.id = 1;
    expect(controller.assignUsers(request)).toEqual(expectedResult);
    expect(mockRoleService.assignUsers).toHaveBeenCalledWith(
      request.roleId,
      request.userIds,
    );
  });
});
