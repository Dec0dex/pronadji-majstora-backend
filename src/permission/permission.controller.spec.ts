import { Ability } from '@casl/ability';
import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from '../auth/auth.module';
import { PoliciesGuard } from '../auth/policies.guard';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { PermissionController } from './permission.controller';
import { PermissionDto } from './permission.dto';
import { PermissionService } from './permission.service';

describe('PermissionController', () => {
  let controller: PermissionController;

  const mockThrottlerGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockPoliciesGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockPermissionService = {
    findAllPermissionsPageable: jest.fn((pageOptionsDto: PageOptionsDto) => {
      const itemCount = 0;
      const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
      return new PageDto([], pageMetaDto);
    }),
    findPermissionById: jest.fn((id: number) => {
      const result = new PermissionDto();
      result.id = id;
      return result;
    }),

    deletePermissionById: jest.fn((id: number) => {
      return { id: id };
    }),

    createPermission: jest.fn((dto: PermissionDto) => {
      return dto;
    }),

    updatePermission: jest.fn((dto: PermissionDto) => {
      return dto;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionController],
      providers: [PermissionService, AuthModule, ThrottlerModule],
    })
      .overrideProvider(PermissionService)
      .useValue(mockPermissionService)
      .overrideGuard(ThrottlerGuard)
      .useValue(mockThrottlerGuard)
      .overrideGuard(PoliciesGuard)
      .useValue(mockPoliciesGuard)
      .compile();

    controller = module.get<PermissionController>(PermissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should ensure that the guards are applied to the controller', async () => {
    const guards = Reflect.getMetadata('__guards__', PermissionController);
    const throttlerGuard = new guards[0]();
    const policiesGuard = new guards[1]();

    expect(throttlerGuard).toBeInstanceOf(ThrottlerGuard);
    expect(policiesGuard).toBeInstanceOf(PoliciesGuard);
  });

  it('should return list of permissions', async () => {
    const pageOptionsDto = new PageOptionsDto();
    const itemCount = 0;
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    const expectedResult = new PageDto([], pageMetaDto);
    expect(controller.findAllPermissions(pageOptionsDto)).toEqual(
      expectedResult,
    );
    expect(
      mockPermissionService.findAllPermissionsPageable,
    ).toHaveBeenCalledWith(pageOptionsDto);
  });

  it('should return permission with id', async () => {
    const result = new PermissionDto();
    result.id = 1;
    expect(controller.findPermissionById(1)).toEqual(result);
    expect(mockPermissionService.findPermissionById).toHaveBeenCalledWith(1);
  });

  it('should delete permission with id', async () => {
    expect(controller.deletePermission(1)).toEqual({ id: 1 });
    expect(mockPermissionService.deletePermissionById).toHaveBeenCalledWith(1);
  });

  it('should create permission', async () => {
    const dto = new PermissionDto();
    expect(controller.createPermission(dto)).toEqual(dto);
    expect(mockPermissionService.createPermission).toHaveBeenCalledWith(dto);
  });

  it('should updatePermission', async () => {
    const dto = new PermissionDto();
    dto.id = 1;
    expect(controller.updatePermission(dto)).toEqual(dto);
  });
});
