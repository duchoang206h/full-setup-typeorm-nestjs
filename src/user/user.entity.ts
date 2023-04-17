import { Exclude, Expose } from 'class-transformer';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomEntity } from '../common/entity/custom.entity';
import { BoardEntity } from '../board/board.entity';
@Entity({
  name: 'users',
})
export class UserEntity extends CustomEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  userId: number;
  @Column()
  email: string;
  @Exclude({
    toPlainOnly: true,
  })
  @Column({ nullable: false })
  password: string;
  @OneToMany(() => BoardEntity, (board) => board.user)
  boards: BoardEntity[];
}
