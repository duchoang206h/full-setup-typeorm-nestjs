import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ListEntity } from '../list/list.entity';
import { CustomEntity } from '../common/entity/custom.entity';
@Entity({
  name: 'cards',
})
export class CardEntity extends CustomEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  cardId: number;
  @Column()
  content: string;
  @Column({ type: 'int' })
  order: number;
  @ManyToOne(() => ListEntity, (list) => list.cards, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'listId',
    referencedColumnName: 'listId',
  })
  list: ListEntity;
}
