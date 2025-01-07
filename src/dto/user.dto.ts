import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class UserDto {

    @IsNotEmpty()
    @IsEmail({}, { message: "Invalid email" })
    email: string;

    @IsNotEmpty({ message: "Password is required" })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string;

}