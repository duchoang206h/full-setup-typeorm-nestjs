import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, DeepPartial } from 'typeorm';
import { ListEntity } from '../../list/list.entity';
import { CardEntity } from '../../card/card.entity';
import { BoardEntity } from '../../board/board.entity';

export default class CreateLists implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const lists = [
      {
        name: 'Monday',
        cards: [
          {
            content: 'Learn English',
            order: 1,
          },
          {
            content: 'Learn Nodejs',
            order: 2,
          },
        ],
        order: 1,
        board: {
          boardId: 1,
        },
      },
      {
        name: 'Monday',
        cards: [
          {
            content: 'Learn English',
            order: 1,
          },
          {
            content: 'Learn Reactjs',
            order: 2,
          },
        ],
        order: 2,
        board: {
          boardId: 1,
        },
      },
    ].map((l) => {
      const cards = l.cards.map((c) =>
        CardEntity.create({ content: c.content, order: c.order }),
      );
      const list = new ListEntity();
      list.name = l.name;
      list.order = l.order;
      list.board = BoardEntity.create({ boardId: l.board.boardId });
      list.cards = cards;
      return list;
    });
    await connection.getRepository(ListEntity).save(lists);

    /* .createQueryBuilder()
      .insert()
      .into(ListEntity)
      .values()
      .execute(); */
  }
}
