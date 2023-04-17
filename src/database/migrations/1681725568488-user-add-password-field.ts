import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UserAddPasswordField1681725568488 implements MigrationInterface {
  table = 'users';
  column = new TableColumn({
    name: 'password',
    type: 'varchar',
    isNullable: false,
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.table, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.table, this.column);
  }
}
