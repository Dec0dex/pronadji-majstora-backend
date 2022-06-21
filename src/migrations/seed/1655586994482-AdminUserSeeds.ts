import { Role } from 'src/role/role.entity';
import { User } from 'src/user/user.entity';
import { encodePassword } from 'src/util/bcrypt';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdminUserSeeds1655586994482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRole = await queryRunner.manager.findOne(Role, {
      where: { name: 'admin' },
    });

    const adminUser = await queryRunner.manager.save(
      queryRunner.manager.create<User>(User, {
        firstName: 'Dejan',
        lastName: 'Radmanovic',
        email: 'office@decodex.net',
        isAccountActivated: true,
        isEmailVerified: true,
        dateCreated: Date(),
        dateUpdated: Date(),
        dateOfBirth: null,
        username: 'admin',
        password: encodePassword('admin'),
        roles: [adminRole],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE user');
  }
}
