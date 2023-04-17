import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { BoardEntity } from '../../board/board.entity';

export default class CreateBoards implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(BoardEntity)
      .values([
        {
          name: 'Board 01',
          user: {
            userId: 1,
          },
        },
      ])
      .execute();
  }
}
