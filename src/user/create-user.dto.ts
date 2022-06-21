import { IsDate, IsEmail, IsNotEmpty, ValidateIf } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  password: string;

  @IsDate()
  @ValidateIf((_object, value) => value !== null)
  dateOfBirth: Date;
}
