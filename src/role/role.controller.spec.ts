import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PoliciesGuard } from '../auth/policies.guard';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

describe('RoleController', () => {
  let controller: RoleController;
  const mockThrottlerGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockPoliciesGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockRoleService = {};
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
});
