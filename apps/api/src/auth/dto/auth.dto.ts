import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email cannot be empty.' })
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password cannot be empty.' })
  @IsString()
  password: string;
}
