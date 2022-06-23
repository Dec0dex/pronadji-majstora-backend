import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageMetaDto } from '../pagination/page-meta.dto';
import { PageOptionsDto } from '../pagination/page-options.dto';
import { PageDto } from '../pagination/page.dto';
import { Permission } from '../permission/permission.entity';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { RoleDto } from './role.dto';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  @InjectRepository(Role)
  private roleRepository: Repository<Role>;

  @InjectRepository(Permission)
  private permissionRepository: Repository<Permission>;

  @InjectRepository(User)
  private userRepository: Repository<User>;

  async findAllRolesPageable(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<RoleDto>> {
    const queryBuilder = this.roleRepository.createQueryBuilder('roles');

    queryBuilder
      .orderBy('name', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(
      entities.map((role) => {
        /* istanbul ignore next */
        const dto = new RoleDto();
        /* istanbul ignore next */
        dto.fromModel(role);
        /* istanbul ignore next */
        return dto;
      }),
      pageMetaDto,
    );
  }

  async findRoleById(id: number): Promise<RoleDto> {
    const result = await this.roleRepository.findOne(id);
    if (result) {
      const dto = new RoleDto();
      dto.fromModel(result);
      return dto;
    } else {
      throw new NotFoundException(
        'An role with id: ' + id + ' has not been found in database',
      );
    }
  }

  async deleteRoleById(id: number) {
    const result = await this.roleRepository.findOne(id);
    if (result) {
      return this.roleRepository.delete(id);
    } else {
      throw new NotFoundException(
        'An role with id: ' + id + ' has not been found in database',
      );
    }
  }

  async createRole(roleDto: RoleDto): Promise<RoleDto> {
    const role = await this.roleRepository.save(roleDto.toModel());
    const dto = new RoleDto();
    dto.fromModel(role);
    return dto;
  }

  async updateRole(roleDto: RoleDto): Promise<RoleDto> {
    await this.roleRepository.save(roleDto.toModel());
    const role = await this.roleRepository.findOne(roleDto.id);
    const dto = new RoleDto();
    dto.fromModel(role);
    return dto;
  }

  async assignPermissions(roleId: number, permissionIds: number[]) {
    let role = await this.roleRepository.findOne(roleId);
    const permissions = await this.permissionRepository.findByIds(
      permissionIds,
    );

    if (role && permissions && permissions.length > 0) {
      role.permissions = permissions;
      await this.roleRepository.save(role);
      role = await this.roleRepository.findOne(role.id);
      const dto = new RoleDto();
      dto.fromModel(role);
      return dto;
    } else {
      throw new NotFoundException();
    }
  }

  async assignUsers(roleId: number, userIds: number[]) {
    let role = await this.roleRepository.findOne(roleId);
    const users = await this.userRepository.findByIds(userIds);

    if (role && users && users.length > 0) {
      role.users = users;
      await this.roleRepository.save(role);
      role = await this.roleRepository.findOne(role.id);
      const dto = new RoleDto();
      dto.fromModel(role);
      return dto;
    } else {
      throw new NotFoundException();
    }
  }
}
