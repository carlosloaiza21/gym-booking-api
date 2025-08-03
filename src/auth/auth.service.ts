import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService:JwtService){}

    async validateUser(email:string, password:string):Promise<any>{
        const user = await this.userService.findByEmail(email);
        if(!user){
            throw new UnauthorizedException('User no found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new UnauthorizedException("invalid password")
        }

        const { password: _, ...result } = user;
        return result;
    }

    async login(user:User){
        const payload={
            email:user.email,
            sub: user.id,
            role: user.role
        }
        return {
            access_token: await this.jwtService.sign(payload)
        }
    }
}
