import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async create(CreateUserDto: CreateUserDto): Promise<User>{
        const {email, password, role} = CreateUserDto;

        const existUser = await this.userRepository.findOne({where:{email}});

        if(existUser){
            throw new ConflictException('El usuario ya existe');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);

        const newUser = this.userRepository.create({
            email,
            password: hashedPassword,
            role
        });

        return this.userRepository.save(newUser);

    }

}
