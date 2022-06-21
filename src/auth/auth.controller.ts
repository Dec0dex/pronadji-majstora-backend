import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Headers,
  UseGuards,
  Version,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './login.dto';
import { Public } from './public.factory';
import { RefreshTokenDto } from './refresh-token.dto';

@Controller('auth')
@UseGuards(ThrottlerGuard)
@ApiTags('auth')
@Public()
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post('login')
  @Version('1')
  @ApiUnauthorizedResponse({ description: 'Wrong Credentials' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('refreshToken')
  @Version('1')
  @ApiForbiddenResponse({ description: 'Refresh Token is Invalid' })
  refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshToken(refreshTokenDto);
  }

  @Get('me')
  @Version('1')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  me(@Request() request) {
    return this.authService.getCurrentUser(request.headers.authorization);
  }
}
