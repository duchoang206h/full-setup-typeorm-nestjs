import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CustomEntity extends BaseEntity {
  // id should be name as table + Id, like boardId
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
