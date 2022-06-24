import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  const mockedUsersRepository = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findOne: jest.fn((_parms: any) => {
      return new User();
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockedUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find user by username or email', async () => {
    expect(await service.findByUsernameOrEmail('admin')).toEqual(new User());
    expect(mockedUsersRepository.findOne).toHaveBeenCalled();
  });
});
