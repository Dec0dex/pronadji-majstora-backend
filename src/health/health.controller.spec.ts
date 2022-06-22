import { CanActivate } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard } from '@nestjs/throttler';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;
  const mockThrottlerGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockTypeOrmHealthIndicator = {};
  const mockHealthCheckService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        HealthCheckService,
        HttpHealthIndicator,
        TypeOrmHealthIndicator,
      ],
    })
      .overrideGuard(ThrottlerGuard)
      .useValue(mockThrottlerGuard)
      .overrideProvider(HealthCheckService)
      .useValue(mockHealthCheckService)
      .overrideProvider(TypeOrmHealthIndicator)
      .useValue(mockTypeOrmHealthIndicator)
      .compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
