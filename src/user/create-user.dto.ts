import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateIf,
} from 'class-validator';

/** It's a class that defines the shape of the data that will be sent to the server when a user is
created */
export class CreateUserDto {
  /** It's a decorator that is used to validate the data that is sent to the server. This property holds
   * information about user username */
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  /** It's a decorator that is used to validate the data that is sent to the server. This property holds
  information about user email. */
  @IsEmail()
  email: string;

  /** It's a decorator that is used to validate the data that is sent to the server. This property holds
  information about user first name. */
  @IsNotEmpty()
  firstName: string;

  /** It's a decorator that is used to validate the data that is sent to the server. This property holds
    information about user last name. */
  @IsNotEmpty()
  lastName: string;

  /** It's a decorator that is used to validate the data that is sent to the server. This property holds
    information about user password. */
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  /** It's a decorator that is used to validate the data that is sent to the server. This property holds
    information about user date of birth. */
  @IsDate()
  @ValidateIf((_object, value) => value !== null)
  dateOfBirth: Date;
}
