import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { Repository } from 'typeorm';
import { PermissionDto } from './permission.dto';
import { Permission } from './permission.entity';

@Injectable()
export class PermissionService {
  @InjectRepository(Permission)
  private permissionRepository: Repository<Permission>;

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

  async createPermission(permissionDto: PermissionDto): Promise<PermissionDto> {
    const permission = await this.permissionRepository.save(
      permissionDto.toModel(),
    );
    const dto = new PermissionDto();
    dto.fromModel(permission);
    return dto;
  }

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
