/** It's a class that defines the shape of the data that will be sent to the server when a user logs in */
import { IsNotEmpty, MinLength } from 'class-validator';

/** It's a class that has two properties, usernameOrEmail and password, and both of them are required
and have a minimum length of 3 and 6 respectively */
export class LoginDto {
  /** It's a property that is required and has a minimum length of 3. */
  @IsNotEmpty()
  @MinLength(3)
  usernameOrEmail: string;

  /** It's a property that is required and has a minimum length of 6. */
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
