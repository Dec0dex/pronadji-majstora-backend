import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { CaslAbilityFactory } from './casl-ability.factory';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { PoliciesGuard } from './policies.guard';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UserModule],
  providers: [
    AuthService,
    JwtService,
    JwtStrategy,
    CaslAbilityFactory,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    PoliciesGuard,
  ],
  exports: [AuthService, CaslAbilityFactory, PoliciesGuard],
  controllers: [AuthController],
})
export class AuthModule {}
