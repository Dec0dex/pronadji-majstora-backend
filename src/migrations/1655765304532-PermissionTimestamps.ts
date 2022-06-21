import { MigrationInterface, QueryRunner } from 'typeorm';

export class PermissionTimestamps1655765304532 implements MigrationInterface {
  name = 'PermissionTimestamps1655765304532';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "permission" ADD "dateCreated" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "permission" ADD "dateUpdated" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "permission" DROP COLUMN "dateUpdated"`,
    );
    await queryRunner.query(
      `ALTER TABLE "permission" DROP COLUMN "dateCreated"`,
    );
  }
}
