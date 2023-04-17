import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomEntity } from '../common/entity/custom.entity';
import { UserEntity } from '../user/user.entity';
import { ListEntity } from '../list/list.entity';
@Entity({
  name: 'boards',
})
export class BoardEntity extends CustomEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  boardId: number;
  @Column()
  name: string;
  @ManyToOne(() => UserEntity, (user) => user.boards, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'userId',
  })
  user: UserEntity;
  @OneToMany(() => ListEntity, (list) => list.board, { onDelete: 'CASCADE' })
  lists: ListEntity[];
}
