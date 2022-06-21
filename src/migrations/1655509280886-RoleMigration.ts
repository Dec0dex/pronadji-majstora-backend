import { MigrationInterface, QueryRunner } from 'typeorm';

export class RoleMigration165550928088 implements MigrationInterface {
  name = 'RoleMigration1655515669409';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "role" ADD "dateCreated" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "role" ADD "dateUpdated" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "dateUpdated"`);
    await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "dateCreated"`);
  }
}
