import { IsNotEmpty } from 'class-validator';

/** It's a DTO that contains a single property called refresh_token */
export class RefreshTokenDto {
  /** It's a property of the class RefreshTokenDto. */
  @IsNotEmpty()
  refresh_token: string;
}
