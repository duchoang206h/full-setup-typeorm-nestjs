import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Query, UseGuards } from '@nestjs/common';
import { LoginInput } from './types/login.input';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginType } from './types/login.type';
import { Public } from './decorators/public.decorator';
import { UserSerializer } from '../user/user.serializer';
import { CurrentUser } from './decorators/currentUser.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Mutation(() => LoginType)
  async login(@Args('input') _: LoginInput, @Context() context: any) {
    return this.authService.login(context.req.user);
  }
}
