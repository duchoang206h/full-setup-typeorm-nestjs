import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Card } from '../card/card.type';
import { BaseObjectType } from '../common/graphql/types/base-object-type';

@ObjectType()
export class List extends BaseObjectType {
  @Field(() => Int)
  listId: number;
  @Field(() => Int)
  boardId: number;
  @Field(() => Int)
  order: number;
  @Field()
  name: string;
  @Field(() => [Card])
  cards: Card[];
}
