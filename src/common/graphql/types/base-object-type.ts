import { Field, ObjectType, DateScalarMode } from '@nestjs/graphql';

@ObjectType()
export class BaseObjectType {
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
