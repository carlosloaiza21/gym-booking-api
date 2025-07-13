import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto):Promise<User> {
        return this.userService.create(createUserDto);
    }


}
