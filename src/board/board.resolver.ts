import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { BoardRepository } from './board.repository';
import { PaginationArg } from '../common/graphql/types/pagination-arg';
import { BoardSerializer } from './board.serializer';

import {
  BoardFilterInput,
  CreateBoardInput,
  DeleteBoardInput,
  UpdateBoardInput,
} from './types/board.input';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import { UserSerializer } from '../user/user.serializer';
import { ListSerializer } from '../list/list.serializer';
import { ListRepository } from '../list/list.repository';
import { CardSerializer } from '../card/card.serializer';
import { CardRepository } from '../card/card.repository';
@Resolver(() => BoardSerializer)
export class BoardsResolver {
  constructor(
    private readonly boardRepository: BoardRepository,
    private readonly listRepository: ListRepository,
    private readonly cardRepository: CardRepository,
  ) {}
  @Query(() => [BoardSerializer])
  async boards(
    @Args() paginateArgs: PaginationArg,
    @Args('filter', { nullable: true }) filter: BoardFilterInput,
    @CurrentUser() user: UserSerializer,
  ): Promise<BoardSerializer[]> {
    filter = Object.assign({}, filter, { userId: user.userId });
    return this.boardRepository.findWithFilter(filter, paginateArgs);
  }
  @ResolveField('lists', () => [ListSerializer])
  async lists(@Parent() board: BoardSerializer) {
    return this.listRepository.find({
      where: { board: { boardId: board.boardId } },
    });
  }
  @Mutation(() => BoardSerializer)
  async createBoard(
    @Args('input') input: CreateBoardInput,
    @CurrentUser() user: UserSerializer,
  ) {
    return this.boardRepository.create({
      user: {
        userId: user.userId,
      },
      name: input.name,
    });
  }
  @Mutation(() => BoardSerializer)
  async updateBoard(
    @Args('input') input: UpdateBoardInput,
    @CurrentUser() user: UserSerializer,
  ) {
    const board = await this.boardRepository.findOne({
      where: { user: { userId: user.userId }, boardId: input.boardId },
    });
    return this.boardRepository.save({ ...board, ...input });
  }
  @Mutation(() => Boolean)
  async deleteBoard(
    @Args('input') input: DeleteBoardInput,
    @CurrentUser() user: UserSerializer,
  ) {
    const board = await this.boardRepository.findOne({
      where: { user: { userId: user.userId }, boardId: input.boardId },
    });
    return await this.boardRepository.remove(board);
  }
}
