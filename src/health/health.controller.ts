import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { ThrottlerGuard } from '@nestjs/throttler';
import enviroment from '../../env';
import { Public } from '../auth/public.factory';

/** It's a public REST controller that checks the health of the application */
@Public()
@Controller('health')
@ApiTags('health')
@UseGuards(ThrottlerGuard)
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
  ) {}

  /**
   * The function returns a promise that resolves to an array of health check results
   * @returns An array of promises.
   */
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('Basic Check', enviroment.APP_URL),
      () => this.db.pingCheck('postgres'),
    ]);
  }
}
