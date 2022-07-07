import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Request,
  UseGuards,
  Version,
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

/** It's a REST controller that has a login and refreshToken endpoint, and a me endpoint that requires
authentication, this controller handles authorization */
@Controller('auth')
@UseGuards(ThrottlerGuard)
@ApiTags('auth')
@Public()
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  /** This is a function that takes a loginDto object as a parameter, and returns the result of the
login function in the authService. */
  @Post('login')
  @Version('1')
  @ApiUnauthorizedResponse({ description: 'Wrong Credentials' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  /** This is a function that takes a refreshTokenDto object as a parameter, and returns the result of the
refreshToken function in the authService */
  @Post('refreshToken')
  @Version('1')
  @ApiForbiddenResponse({ description: 'Refresh Token is Invalid' })
  refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshToken(refreshTokenDto);
  }

  /** This is a function that takes a request object as a parameter, and returns the result of the
getCurrentUser function in the authService. */
  @Get('me')
  @Version('1')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  me(@Request() request) {
    return this.authService.getCurrentUser(request.headers.authorization);
  }
}
