import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { RefreshTokenDto } from './refresh-token.dto';
import { TokenDto } from './token.dto';

describe('AuthService', () => {
  let service: AuthService;
  const mockedUserService = {
    findByUsernameOrEmail: jest.fn((usernameOrEmail: string) => {
      return new User();
    }),
  };
  const mockedJwtService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UserService, JwtService],
    })
      .overrideProvider(UserService)
      .useValue(mockedUserService)
      .overrideProvider(JwtService)
      .useValue(mockedJwtService)
      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should login user', async () => {
    const dto = new LoginDto();
    expect(service.login(dto)).toBeInstanceOf(Promise);
  });

  it('should verify token', async () => {
    try {
      expect(await service.refreshToken(new RefreshTokenDto())).toEqual(
        new TokenDto('', ''),
      );
    } catch (error) {
      expect(error).toBeInstanceOf(ForbiddenException);
    }
  });

  it('should get current user', async () => {
    try {
      expect(await service.getCurrentUser('')).toEqual(new TokenDto('', ''));
    } catch (error) {
      expect(error).toBeInstanceOf(UnauthorizedException);
    }
  });
});
