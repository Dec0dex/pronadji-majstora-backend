import {
  ForbiddenException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import enviroment from '../../env';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { comparePasswords } from '../util/bcrypt';
import { LoginDto } from './login.dto';
import { RefreshTokenDto } from './refresh-token.dto';
import { TokenDto } from './token.dto';

@Injectable()
export class AuthService {
  @Inject()
  private userService: UserService;
  @Inject()
  private jwtService: JwtService;

  /* istanbul ignore next */
  protected async validateUser(
    usernameOrEmail: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.userService.findByUsernameOrEmail(usernameOrEmail);
    await user.roles;
    if (user && comparePasswords(password, user.password)) {
      return user;
    } else {
      return null;
    }
  }

  //TODO: Save refresh token in fast memory
  /* istanbul ignore next */
  private generateNewToken(user: User) {
    const access_token = this.jwtService.sign(
      { user },
      {
        issuer: enviroment.APP_URL,
        secret: enviroment.ACCESS_TOKEN_SECRET,
        expiresIn: enviroment.ACCESS_TOKEN_EXPIRATION_TIME,
      },
    );
    const refresh_token = this.jwtService.sign(
      { user },
      {
        issuer: enviroment.APP_URL,
        secret: enviroment.REFRESH_TOKEN_SECRET,
        expiresIn: enviroment.REFRESH_TOKEN_EXPIRATION_TIME,
      },
    );
    return new TokenDto(access_token, refresh_token);
  }

  async login(loginDto: LoginDto): Promise<TokenDto> {
    const user = await this.validateUser(
      loginDto.usernameOrEmail,
      loginDto.password,
    );

    /* istanbul ignore next */
    if (user) {
      return this.generateNewToken(user);
    } else {
      throw new UnauthorizedException('Wrong Credentials');
    }
  }

  async refreshToken(dto: RefreshTokenDto): Promise<TokenDto> {
    try {
      return this.jwtService.verify(dto.refresh_token, {
        issuer: enviroment.APP_URL,
        secret: enviroment.REFRESH_TOKEN_SECRET,
        ignoreExpiration: false,
      });
    } catch {
      throw new ForbiddenException('Invalid Refresh Token');
    }
  }

  async getCurrentUser(authHeader: string): Promise<User> {
    const token = authHeader.replace('Bearer ', '');
    try {
      return this.jwtService.verify(token, {
        issuer: enviroment.APP_URL,
        secret: enviroment.ACCESS_TOKEN_SECRET,
        ignoreExpiration: false,
      });
    } catch {
      throw new UnauthorizedException('Invalid JWT Token');
    }
  }
}
