import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsDate()
  @ValidateIf((_object, value) => value !== null)
  dateOfBirth: Date;
}
