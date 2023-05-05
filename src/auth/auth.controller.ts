import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UnauthorizedException,
  UseInterceptors,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.signIn(body.email, body.password);
    if (!user) throw new UnauthorizedException();
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
