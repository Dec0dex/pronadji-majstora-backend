import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Permission } from '../permission/permission.entity';
import { User } from '../user/user.entity';
import { Role } from './role.entity';
import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;
  const mockedRoleRepository = {};
  const mockedPermissionRepository = {};
  const mockedUsersRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleService,
        {
          provide: getRepositoryToken(Role),
          useValue: mockedRoleRepository,
        },
        {
          provide: getRepositoryToken(User),
          useValue: mockedUsersRepository,
        },
        {
          provide: getRepositoryToken(Permission),
          useValue: mockedPermissionRepository,
        },
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
