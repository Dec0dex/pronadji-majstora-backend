import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './public.factory';

/** If the route is public, then return true, otherwise, return the result of the super class's
canActivate method */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * The `constructor` function is a special function that is called when a new instance of the class is
   * created
   * @param {Reflector} reflector - Reflector
   */
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * If the route is public, return true, otherwise, return the result of the super class's canActivate
   * function
   * @param {ExecutionContext} context - ExecutionContext
   * @returns A boolean value.
   */
  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }
}
