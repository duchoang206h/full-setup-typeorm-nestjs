import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListEntity } from './list.entity';
import { ListRepository } from './list.repository';
import { ListResolver } from './list.resolver';
import { CardModule } from '../card/card.module';

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity]), CardModule],
  providers: [ListRepository, ListResolver],
  exports: [ListRepository],
})
export class ListModule {}
