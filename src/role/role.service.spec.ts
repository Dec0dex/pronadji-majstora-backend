import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { Permission } from '../permission/permission.entity';
import { User } from '../user/user.entity';
import { RoleDto } from './role.dto';
import { Role } from './role.entity';
import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;
  const mockedRoleRepository = {
    save: jest.fn((role: Role) => role),
    update: jest.fn((options, role: Role) => role),
    remove: jest.fn((role: Role) => {
      if (role.id == -1) return undefined;
      return role.id;
    }),
    findOne: jest.fn((id: number) => {
      if (id == -1) return undefined;
      const role = new Role();
      role.id = id;
      return role;
    }),
    createQueryBuilder: jest.fn(() => ({
      orderBy: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      getCount: jest.fn(() => {
        return 0;
      }),
      getRawAndEntities: jest.fn(() => {
        return { raw: [], entities: [] };
      }),
    })),
  };
  const mockedPermissionRepository = {
    findByIds: jest.fn((ids: number[]) => {
      const permisison = new Permission();
      permisison.id = ids[0];
      return [permisison];
    }),
  };
  const mockedUsersRepository = {
    findByIds: jest.fn((ids: number[]) => {
      const user = new User();
      user.id = ids[0];
      return [user];
    }),
  };

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

  it('should find all roles as pageable', async () => {
    const pageOptionsDto = new PageOptionsDto();
    const itemCount = 0;
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    const expectedResult = new PageDto([], pageMetaDto);
    expect(await service.findAllRolesPageable(pageOptionsDto)).toEqual(
      expectedResult,
    );
    expect(mockedRoleRepository.createQueryBuilder).toHaveBeenCalled();
  });

  it('should find role by id', async () => {
    const expectedResult = new RoleDto();
    expectedResult.id = 1;
    expect(await service.findRoleById(1)).toEqual(expectedResult);
    expect(mockedRoleRepository.findOne).toHaveBeenCalledWith(1);
  });

  it('should delete role by id', async () => {
    expect(await service.deleteRoleById(1)).toEqual(1);
    expect(mockedRoleRepository.remove).toHaveBeenCalled();
  });

  it('should create role', async () => {
    const dto = new RoleDto();
    expect(await service.createRole(dto)).toEqual(dto);
    expect(mockedRoleRepository.save).toHaveBeenCalledWith(dto.toModel());
  });

  it('should update role', async () => {
    const dto = new RoleDto();
    expect(await service.updateRole(dto)).toEqual(dto);
    expect(mockedRoleRepository.update).toHaveBeenCalledWith(
      { id: dto.id },
      dto.toModel(),
    );
  });

  it('should not find role by id', async () => {
    try {
      await service.findRoleById(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

  it('should not find role by id on delete', async () => {
    try {
      await service.deleteRoleById(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

  it('should assign permission to role', async () => {
    const expectedResult = new RoleDto();
    expectedResult.id = 1;
    expect(await service.assignPermissions(1, [1])).toEqual(expectedResult);
    expect(mockedRoleRepository.findOne).toHaveBeenCalledWith(1);
    expect(mockedPermissionRepository.findByIds).toHaveBeenCalledWith([1]);
    expect(mockedRoleRepository.save).toHaveBeenCalled();
  });

  it('should assign user to role', async () => {
    const expectedResult = new RoleDto();
    expectedResult.id = 1;
    expect(await service.assignUsers(1, [1])).toEqual(expectedResult);
    expect(mockedRoleRepository.findOne).toHaveBeenCalledWith(1);
    expect(mockedUsersRepository.findByIds).toHaveBeenCalledWith([1]);
    expect(mockedRoleRepository.save).toHaveBeenCalled();
  });

  it('should not find role on assign permisison function', async () => {
    try {
      await service.assignPermissions(-1, [-1]);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

  it('should not find role on assign user function', async () => {
    try {
      await service.assignUsers(-1, [-1]);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});
