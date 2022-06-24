import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard } from '@nestjs/throttler';
import { User } from '../user/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { RefreshTokenDto } from './refresh-token.dto';
import { TokenDto } from './token.dto';

describe('RoleController', () => {
  let controller: AuthController;
  const mockThrottlerGuard: CanActivate = { canActivate: jest.fn(() => true) };
  const mockAuthService = {
    login: jest.fn((dto: LoginDto) => {
      return dto;
    }),
    refreshToken: jest.fn((dto: RefreshTokenDto) => {
      return new TokenDto('', dto.refresh_token);
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getCurrentUser: jest.fn((_token: string) => {
      return new User();
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideGuard(ThrottlerGuard)
      .useValue(mockThrottlerGuard)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should ensure that the guards are applied to the controller', async () => {
    const guards = Reflect.getMetadata('__guards__', AuthController);
    const throttlerGuard = new guards[0]();

    expect(throttlerGuard).toBeInstanceOf(ThrottlerGuard);
  });

  it('should login user', () => {
    const dto = new LoginDto();
    expect(controller.login(dto)).toEqual(dto);
    expect(mockAuthService.login).toHaveBeenCalledWith(dto);
  });

  it('should refresh token', () => {
    const dto = new RefreshTokenDto();
    dto.refresh_token = '';
    expect(controller.refreshToken(dto)).toEqual(new TokenDto('', ''));
    expect(mockAuthService.refreshToken).toHaveBeenCalledWith(dto);
  });

  it('should return current user', () => {
    expect(controller.me({ headers: { authorization: '' } })).toEqual(
      new User(),
    );
    expect(mockAuthService.getCurrentUser).toHaveBeenCalledWith('');
  });
});
