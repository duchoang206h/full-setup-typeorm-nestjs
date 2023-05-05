import { Parent, Resolver } from '@nestjs/graphql';
import { ListSerializer } from './list.serializer';
import { ListRepository } from './list.repository';
import { CardRepository } from '../card/card.repository';
import { ResolverField } from '@nestjs-query/query-graphql/dist/src/decorators';
import { CardSerializer } from '../card/card.serializer';

@Resolver(() => ListSerializer)
export class ListResolver {
  constructor(private readonly cardRepository: CardRepository) {}
  @ResolverField('cards', () => [CardSerializer])
  async cards(@Parent() list: ListSerializer) {
    return this.cardRepository.find({
      where: { list: { listId: list.listId } },
    });
  }
}
