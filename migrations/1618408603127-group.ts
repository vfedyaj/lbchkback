import {MigrationInterface, QueryRunner} from "typeorm";

export class group1618408603127 implements MigrationInterface {
    name = 'group1618408603127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" RENAME COLUMN "group" TO "groupId"`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "name" character varying(10) NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "groupId"`);
        await queryRunner.query(`ALTER TABLE "student" ADD "groupId" integer`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_ce9660fc114efef4062bba4c119" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_ce9660fc114efef4062bba4c119"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "groupId"`);
        await queryRunner.query(`ALTER TABLE "student" ADD "groupId" character varying(5) NOT NULL`);
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME COLUMN "groupId" TO "group"`);
    }

}
