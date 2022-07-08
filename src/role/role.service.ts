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

/** It's a service class that provides methods for CRUD operations on the Role entity */
@Injectable()
export class RoleService {
  /** It's a TypeORM repository that provides methods for CRUD operations on the Role entity. */
  @InjectRepository(Role)
  private roleRepository: Repository<Role>;

  /** It's a TypeORM repository that provides methods for CRUD operations on the Permission entity. */
  @InjectRepository(Permission)
  private permissionRepository: Repository<Permission>;

  /** It's a TypeORM repository that provides methods for CRUD operations on the User entity. */
  @InjectRepository(User)
  private userRepository: Repository<User>;

  /**
   * It returns a page of roles
   * @param {PageOptionsDto} pageOptionsDto - PageOptionsDto
   * @returns A PageDto object
   */
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

  /**
   * It finds a role by id, and if it exists, it returns a RoleDto object, otherwise it throws a
   * NotFoundException
   * @param {number} id - number - the id of the role we want to find
   * @returns A RoleDto object
   */
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

  /**
   * It finds a role by id, if it exists, it deletes it, if it doesn't exist, it throws an error
   * @param {number} id - number - The id of the role to be deleted
   * @returns The result of the delete operation.
   */
  async deleteRoleById(id: number) {
    const result = await this.roleRepository.findOne(id);
    if (result) {
      return this.roleRepository.remove(result);
    } else {
      throw new NotFoundException(
        'An role with id: ' + id + ' has not been found in database',
      );
    }
  }

  /**
   * It takes a RoleDto, converts it to a Role model, saves it to the database, converts it back to a
   * RoleDto, and returns it
   * @param {RoleDto} roleDto - RoleDto - This is the DTO that will be passed in from the client.
   * @returns A RoleDto object
   */
  async createRole(roleDto: RoleDto): Promise<RoleDto> {
    const role = await this.roleRepository.save(roleDto.toModel());
    const dto = new RoleDto();
    dto.fromModel(role);
    return dto;
  }

  /**
   * It takes a RoleDto, saves it to the database, then returns a RoleDto
   * @param {RoleDto} roleDto - RoleDto - This is the DTO that we're going to use to update the role.
   * @returns A RoleDto
   */
  async updateRole(roleDto: RoleDto): Promise<RoleDto> {
    await this.roleRepository.update({ id: roleDto.id }, roleDto.toModel());
    const role = await this.roleRepository.findOne(roleDto.id);
    const dto = new RoleDto();
    dto.fromModel(role);
    return dto;
  }

  /**
   * It takes a roleId and an array of permissionIds, finds the role and permissions, assigns the
   * permissions to the role, saves the role, and returns the role
   * @param {number} roleId - The id of the role to assign permissions to.
   * @param {number[]} permissionIds - number[]
   * @returns A RoleDto
   */
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

  /**
   * It takes a roleId and an array of userIds, finds the role and users, assigns the
   * users to the role, saves the role, and returns the role
   * @param {number} roleId - The id of the role to assign users to.
   * @param {number[]} userIds - number[]
   * @returns A RoleDto object
   */
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
