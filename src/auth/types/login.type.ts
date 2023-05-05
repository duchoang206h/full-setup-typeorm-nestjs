import { Field, ObjectType } from '@nestjs/graphql';
import { BaseObjectType } from '../../common/graphql/types/base-object-type';
import { UserSerializer } from '../../user/user.serializer';

@ObjectType()
export class LoginType extends BaseObjectType {
  @Field()
  accessToken: string;
  @Field(() => UserSerializer)
  user: UserSerializer;
}
