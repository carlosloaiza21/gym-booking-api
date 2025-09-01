import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    singIn(@Body() loginDto:LoginDto){
        return this.authService.SingIn(loginDto.email, loginDto.password);
    }

}
