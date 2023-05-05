import { Resolver } from '@nestjs/graphql';
import { UserRepository } from './user.repository';
import { Query } from '@nestjs/graphql';
import { UserSerializer } from './user.serializer';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';

@Resolver()
export class UserResolver {
  constructor(private readonly userRepository: UserRepository) {}
  @Query(() => UserSerializer)
  async me(@CurrentUser() user: UserSerializer) {
    return this.userRepository.findOneBy({ userId: user.userId });
  }
}
