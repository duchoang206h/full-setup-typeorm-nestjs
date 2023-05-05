import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import * as bcrypt from 'bcrypt';
import { UserSerializer } from '../user/user.serializer';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async validate(email: string, password: string): Promise<UserSerializer> {
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      console.log({ user });
      if (user && bcrypt.compareSync(password, user.password))
        return this.userRepository.transform(user);
      return null;
    } catch (error) {
      console.log(error);
      this.logger.error(error);
      return null;
    }
  }
  async login(user: UserSerializer) {
    const payload = { sub: user.userId, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('jwt.access.secret'),
      expiresIn: this.configService.get('jwt.access.expiresIn'),
    });
    return {
      user,
      accessToken,
      //refreshToken
    };
  }
}
