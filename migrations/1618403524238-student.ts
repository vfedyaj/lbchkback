import {MigrationInterface, QueryRunner} from "typeorm";

export class student1618403524238 implements MigrationInterface {
    name = 'student1618403524238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying(15) NOT NULL, "surname" character varying(15) NOT NULL, "group" character varying(5) NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
