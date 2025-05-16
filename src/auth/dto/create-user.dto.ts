import { IsEmail, IsIn, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "email can't be empty"})
    @IsEmail()
    email: string;
    @IsNotEmpty({message: "password can't be empty"})
    @IsString()
    @MinLength(8)
    password: string;
    @IsNotEmpty({message: "role can't be empty"})
    @IsIn(["Admin", "User"])
    role: string[];
}
