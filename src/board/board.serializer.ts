import { Expose, Type } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';
import { ListSerializer } from '../list/list.serializer';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BoardSerializer extends EntitySerializer {
  @Expose()
  @Field(() => Int)
  boardId: number;
  @Expose()
  @Field(() => Int)
  userId: number;
  @Expose()
  @Field()
  name: string;
  @Expose()
  @Field(() => [ListSerializer])
  @Type(() => ListSerializer)
  lists: ListSerializer[];
}
