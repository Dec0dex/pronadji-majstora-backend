import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @MinLength(3)
  usernameOrEmail: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
