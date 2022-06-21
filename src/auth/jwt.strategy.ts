import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import enviroment from '../../env';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: enviroment.ACCESS_TOKEN_SECRET,
      issuer: enviroment.APP_URL,
    });
  }

  async validate(payload: any) {
    return payload.user;
  }
}
