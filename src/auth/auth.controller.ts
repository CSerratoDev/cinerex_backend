import { Controller, Post, Body, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { TOKEN_NAME } from './constants/jwt.constants';
import { LoginUserDto } from './dto/login-user.dto';
import { Cookies } from './decorators/cookies.decorator';
import { Response } from 'express';

@Controller('AdminAuth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}
  
  @Post("signup")
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }
  @Post("login")
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({passthrough: true}) response : Response,
    @Cookies() cookies: any){
      const token = await this.authService.login(loginUserDto)
      let expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      response.cookie(TOKEN_NAME, token, {
        httpOnly: true,	
        secure: true,
        sameSite: 'none',
        expires: expireDate,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      });
    return token;
  }
}
