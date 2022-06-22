import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PoliciesGuard } from '../auth/policies.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('RoleController', () => {
  let controller: AuthController;
  const mockThrottlerGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockPoliciesGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockAuthService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideGuard(ThrottlerGuard)
      .useValue(mockThrottlerGuard)
      .overrideGuard(PoliciesGuard)
      .useValue(mockPoliciesGuard)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
