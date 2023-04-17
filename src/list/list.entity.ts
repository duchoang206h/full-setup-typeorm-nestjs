import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CustomEntity } from '../common/entity/custom.entity';
import { BoardEntity } from '../board/board.entity';
import { CardEntity } from '../card/card.entity';
@Entity({
  name: 'lists',
})
export class ListEntity extends CustomEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  listId: number;
  @Column()
  name: string;
  @Column({ type: 'int' })
  order: number;
  @ManyToOne(() => BoardEntity, (board) => board.lists, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'boardId',
    referencedColumnName: 'boardId',
  })
  board: BoardEntity;
  @OneToMany(() => CardEntity, (card) => card.list, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  cards: CardEntity[];
}
