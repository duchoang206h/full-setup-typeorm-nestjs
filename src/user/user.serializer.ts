import { Exclude, Expose, Type } from 'class-transformer';
import { EntitySerializer } from '../common/serializer/entiry.serializer';
import { BoardSerializer } from '../board/board.serializer';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class UserSerializer extends EntitySerializer {
  @Expose()
  @Field(() => Int)
  userId: number;
  @Expose()
  @Field()
  email: string;
  @Expose()
  @Exclude({ toPlainOnly: true })
  password: string;
  @Type(() => BoardSerializer)
  boards: BoardSerializer[];
}
