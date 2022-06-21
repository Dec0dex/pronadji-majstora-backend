import { PermissionAction } from 'src/auth/casl-ability.factory';
import { Permission } from 'src/permission/permission.entity';
import { Role } from 'src/role/role.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class RolePermissionsSeed1655595255331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRole = await queryRunner.manager.findOne(Role, {
      where: {
        name: 'admin',
      },
    });

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.CREATE,
        resource: 'Role',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.READ,
        resource: 'Role',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.UPDATE,
        resource: 'Role',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.DELETE,
        resource: 'Role',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.MANAGE,
        resource: 'Role',
        roles: [adminRole],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE * FROM permission WHERE resource = "Role"');
  }
}
