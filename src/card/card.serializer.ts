import { Expose } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CardSerializer extends EntitySerializer {
  @Expose()
  @Field(() => Int)
  cardId: number;
  @Expose()
  @Field(() => Int)
  order: number;
  @Expose()
  @Field()
  content: string;
}
