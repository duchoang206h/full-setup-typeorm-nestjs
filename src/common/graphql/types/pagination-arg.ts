import { ArgsType, Field, Int, addFieldMetadata } from '@nestjs/graphql';

@ArgsType()
export class PaginationArg {
  @Field(() => Int)
  skip = 0;
  @Field(() => Int)
  limit = 10;
}
