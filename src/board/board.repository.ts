import { ILike, Repository } from 'typeorm';
import { PaginationArg } from '../common/graphql/types/pagination-arg';
import { BaseRepository } from '../common/respository/base.repository';
import { BoardEntity } from './board.entity';
import { BoardSerializer } from './board.serializer';
import { BoardFilterInput } from './types/board.input';
import { InjectRepository } from '@nestjs/typeorm';

export class BoardRepository extends BaseRepository<
  BoardEntity,
  BoardSerializer
> {
  constructor(
    @InjectRepository(BoardEntity)
    private userRepository: Repository<BoardEntity>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }
  async findWithFilter(filter: BoardFilterInput, paginate: PaginationArg) {
    const where = [];
    where.push({ user: { userId: filter.userId } });
    if (filter.hasOwnProperty('name')) {
      where.push({
        name: ILike('%' + filter.name + '%'),
      });
    }
    if (filter.hasOwnProperty('boardId')) {
      where.push({
        boardId: filter.boardId,
      });
    }
    const boards = await this.find({
      where,
      skip: paginate.skip,
      take: paginate.limit,
    });
    return this.transformMany(boards);
  }
}
