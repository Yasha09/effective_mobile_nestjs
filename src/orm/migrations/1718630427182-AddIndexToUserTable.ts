import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIndexToUserTable1718630427182 implements MigrationInterface {
  name = 'AddIndexToUserTable1718630427182';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_ecefd94c5cc80005be5a2b3359" ON "user" ("problems") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ecefd94c5cc80005be5a2b3359"`,
    );
  }
}
