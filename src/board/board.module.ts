import { Module } from '@nestjs/common';
import { BoardsResolver } from './board.resolver';
import { DateScalar } from '../common/scalars/date.scalar';
import { BoardRepository } from './board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './board.entity';
import { ListModule } from '../list/list.module';
import { CardModule } from '../card/card.module';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity]), ListModule, CardModule],
  providers: [BoardsResolver, DateScalar, BoardRepository],
})
export class BoardModule {}
