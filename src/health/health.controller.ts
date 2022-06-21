import { Controller, Get, UseGuards, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator
} from '@nestjs/terminus';
import { ThrottlerGuard } from '@nestjs/throttler';
import enviroment from 'env';
import { Public } from 'src/auth/public.factory';

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

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('Basic Check', enviroment.APP_URL),
      () => this.db.pingCheck('postgres'),
    ]);
  }
}
