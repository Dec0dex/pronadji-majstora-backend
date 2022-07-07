import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import enviroment from '../../env';
import { ExtractJwt, Strategy } from 'passport-jwt';

/** It's a PassportStrategy that uses the JWT strategy to validate the token */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * It takes the token from the request header, checks if it's valid, and if it is, it returns the
   * user's id
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: enviroment.ACCESS_TOKEN_SECRET,
      issuer: enviroment.APP_URL,
    });
  }

  /**
   * "If the payload is valid, return the user object, otherwise throw an error."
   *
   * The payload is the object that was passed to the JWT.sign() function
   * @param {any} payload - The payload that was sent to the server.
   * @returns The user object
   */
  async validate(payload: any) {
    return payload.user;
  }
}
