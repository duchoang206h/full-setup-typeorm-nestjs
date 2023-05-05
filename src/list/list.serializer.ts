import { Expose, Type } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CardSerializer } from '../card/card.serializer';
@ObjectType()
export class ListSerializer extends EntitySerializer {
  @Field(() => Int)
  @Expose()
  listId: number;

  @Field()
  @Expose()
  name: string;

  @Expose()
  @Field(() => Int)
  order: number;
  @Expose()
  @Field(() => [CardSerializer])
  @Type(() => CardSerializer)
  cards: CardSerializer[];
}
