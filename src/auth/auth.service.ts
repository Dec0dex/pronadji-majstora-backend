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

/** It's a service that provides methods to login, refresh tokens and get the current user */
@Injectable()
export class AuthService {
  /** Injecting the UserService into the AuthService. */
  @Inject()
  private userService: UserService;
  /** Injecting the JwtService into the AuthService. */
  @Inject()
  private jwtService: JwtService;

  /**
   * It takes a username or email and a password, finds the user in the database, and compares the
   * password to the one in the database
   * @param {string} usernameOrEmail - The username or email of the user.
   * @param {string} password - The password that the user entered in the login form.
   * @returns A user object with the roles property populated.
   */
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

  /**
   * It creates a new access token and a new refresh token, and returns them in a TokenDto object
   * @param {User} user - The user object that we want to encode in the token.
   * @returns A new TokenDto object with the access_token and refresh_token.
   */
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

  /**
   * It takes a loginDto object, validates the user, and if the user is valid, it generates a new token
   * @param {LoginDto} loginDto - LoginDto
   * @returns A tokenDto object
   */
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

  /**
   * It takes a refresh token, verifies it, and returns a new access token
   * @param {RefreshTokenDto} dto - RefreshTokenDto - The DTO that will be used to validate the refresh
   * token.
   * @returns The token is being returned.
   */
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

  /**
   * It takes an authorization header, extracts the token, verifies it, and returns the user
   * @param {string} authHeader - The authorization header that contains the JWT token.
   * @returns The user object
   */
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
