import { IsEmail, MinLength, IsNotEmpty, IsIn } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string

    @IsNotEmpty()
    @IsIn(['admin', 'client'])
    role?: string

}
