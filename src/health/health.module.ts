import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HttpModule } from '@nestjs/axios';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
  ],
  controllers: [HealthController],
})
export class HealthModule {}
