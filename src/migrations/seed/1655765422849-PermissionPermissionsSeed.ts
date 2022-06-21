import { PermissionAction } from 'src/auth/casl-ability.factory';
import { Permission } from 'src/permission/permission.entity';
import { Role } from 'src/role/role.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PermissionPermissionsSeed1655765422849
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRole = await queryRunner.manager.findOne(Role, {
      where: {
        name: 'admin',
      },
    });

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.CREATE,
        resource: 'Permission',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.READ,
        resource: 'Permission',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.UPDATE,
        resource: 'Permission',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.DELETE,
        resource: 'Permission',
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Permission>(Permission, {
        action: PermissionAction.MANAGE,
        resource: 'Permission',
        roles: [adminRole],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE * FROM permission WHERE resource = "Permission"');
  }
}
