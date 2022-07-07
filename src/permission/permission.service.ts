import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { Repository } from 'typeorm';
import { PermissionDto } from './permission.dto';
import { Permission } from './permission.entity';

/** It's a service class that provides methods for CRUD operations on the Permission entity */
@Injectable()
export class PermissionService {
  /** It's a TypeORM Repository that provides methods for CRUD operations on the Permission entity. */
  @InjectRepository(Permission)
  private permissionRepository: Repository<Permission>;

  /**
   * It returns a page of permissions
   * @param {PageOptionsDto} pageOptionsDto - This is a class that contains the following properties:
   * @returns A PageDto object with a list of PermissionDto objects and a PageMetaDto object.
   */
  async findAllPermissionsPageable(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<PermissionDto>> {
    const queryBuilder =
      this.permissionRepository.createQueryBuilder('permissions');

    queryBuilder
      .orderBy('resource', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(
      entities.map((permission) => {
        /* istanbul ignore next */
        const dto = new PermissionDto();
        /* istanbul ignore next */
        dto.fromModel(permission);
        /* istanbul ignore next */
        return dto;
      }),
      pageMetaDto,
    );
  }

  /**
   * It finds a permission by its id and returns it as a PermissionDto
   * @param {number} id - number - the id of the permission we want to find
   * @returns A PermissionDto object
   */
  async findPermissionById(id: number): Promise<PermissionDto> {
    const result = await this.permissionRepository.findOne(id);
    if (result) {
      const dto = new PermissionDto();
      dto.fromModel(result);
      return dto;
    } else {
      throw new NotFoundException(
        'An permission with id: ' + id + ' has not been found in database',
      );
    }
  }

  /**
   * It deletes a permission from the database by its id
   * @param {number} id - number - The id of the permission to be deleted
   * @returns The result of the delete operation.
   */
  async deletePermissionById(id: number) {
    const result = await this.permissionRepository.findOne(id);
    if (result) {
      return this.permissionRepository.delete(id);
    } else {
      throw new NotFoundException(
        'An permission with id: ' + id + ' has not been found in database',
      );
    }
  }

  /**
   * It creates a new permission and returns it
   * @param {PermissionDto} permissionDto - PermissionDto - This is the DTO that we're going to use to
   * create the permission.
   * @returns A PermissionDto
   */
  async createPermission(permissionDto: PermissionDto): Promise<PermissionDto> {
    const permission = await this.permissionRepository.save(
      permissionDto.toModel(),
    );
    const dto = new PermissionDto();
    dto.fromModel(permission);
    return dto;
  }

  /**
   * It updates a permission in the database
   * @param {PermissionDto} permissionDto - PermissionDto - This is the DTO that we're going to use to
   * update the permission.
   * @returns A PermissionDto
   */
  async updatePermission(permissionDto: PermissionDto): Promise<PermissionDto> {
    await this.permissionRepository.save(permissionDto.toModel());
    const permission = await this.permissionRepository.findOne(
      permissionDto.id,
    );
    const dto = new PermissionDto();
    dto.fromModel(permission);
    return dto;
  }
}
