import { Field, InputType, Int } from '@nestjs/graphql';
@InputType()
export class BoardFilterInput {
  @Field(() => Int, { nullable: true })
  boardId?: number;
  @Field({ nullable: true })
  name?: string;
  userId: number;
}
@InputType()
export class CreateBoardInput {
  @Field()
  name: string;
}
@InputType()
export class UpdateBoardInput extends CreateBoardInput {
  @Field(() => Int)
  boardId: number;
}
@InputType()
export class DeleteBoardInput {
  @Field(() => Int)
  boardId: number;
}
