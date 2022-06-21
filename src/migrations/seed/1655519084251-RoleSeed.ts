import { Role } from 'src/role/role.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class RoleSeed1655509280886 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const admin = await queryRunner.manager.save(
      queryRunner.manager.create<Role>(Role, {
        name: 'admin',
        dateCreated: Date(),
        dateUpdated: Date(),
      }),
    );

    const contractor = await queryRunner.manager.save(
      queryRunner.manager.create<Role>(Role, {
        name: 'contractor',
        dateCreated: Date(),
        dateUpdated: Date(),
      }),
    );

    const user = await queryRunner.manager.save(
      queryRunner.manager.create<Role>(Role, {
        name: 'user',
        dateCreated: Date(),
        dateUpdated: Date(),
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE role');
  }
}
