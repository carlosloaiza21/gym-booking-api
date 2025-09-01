import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll():Promise<User[]>{
        return this.userService.findAll();
    }
    
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto):Promise<User> {
        return this.userService.create(createUserDto);
    }



}
