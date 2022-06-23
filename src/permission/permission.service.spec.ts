import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { PermissionDto } from './permission.dto';
import { Permission } from './permission.entity';
import { PermissionService } from './permission.service';

describe('PermissionService', () => {
  let service: PermissionService;
  const mockedRepository = {
    save: jest.fn((permission: Permission) => permission),
    delete: jest.fn((id: number) => {
      if (id == -1) return undefined;
      return id;
    }),
    findOne: jest.fn((id: number) => {
      if (id == -1) return undefined;
      const permissision = new Permission();
      permissision.id = id;
      return permissision;
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionService,
        {
          provide: getRepositoryToken(Permission),
          useValue: mockedRepository,
        },
      ],
    }).compile();

    service = module.get<PermissionService>(PermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all permission as pageable', async () => {
    const pageOptionsDto = new PageOptionsDto();
    const itemCount = 0;
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    const expectedResult = new PageDto([], pageMetaDto);
    const result = await service.findAllPermissionsPageable(pageOptionsDto);
    expect(result).toEqual(expectedResult);
    expect(mockedRepository.createQueryBuilder).toHaveBeenCalled();
  });

  it('should find permission by id', async () => {
    const expectedResult = new PermissionDto();
    expectedResult.id = 1;
    expect(await service.findPermissionById(1)).toEqual(expectedResult);
    expect(mockedRepository.findOne).toHaveBeenCalledWith(1);
  });

  it('should delete permisison by id', async () => {
    expect(await service.deletePermissionById(1)).toEqual(1);
    expect(mockedRepository.delete).toHaveBeenCalledWith(1);
  });

  it('should create permission', async () => {
    const dto = new PermissionDto();
    expect(await service.createPermission(dto)).toEqual(dto);
    expect(mockedRepository.save).toHaveBeenCalledWith(dto.toModel());
  });

  it('should update permission', async () => {
    const dto = new PermissionDto();
    expect(await service.updatePermission(dto)).toEqual(dto);
    expect(mockedRepository.save).toHaveBeenCalledWith(dto.toModel());
  });

  it('should not find permission by id', async () => {
    try {
      await service.findPermissionById(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

  it('should not find permission by id on delete', async () => {
    try {
      await service.deletePermissionById(-1);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});
