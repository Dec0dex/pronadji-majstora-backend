import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  AppAbility,
  CaslAbilityFactory,
  CHECK_POLICIES_KEY,
  PolicyHandler,
} from './casl-ability.factory';

/** It takes the list of policy handlers from the controller's metadata, creates an ability for the
current user, and executes each policy handler */
@Injectable()
export class PoliciesGuard implements CanActivate {
  /**
   * The `CaslAbilityFactory` is a service that creates an instance of the `CaslAbility` class
   * @param {Reflector} reflector - This is a service that allows us to get metadata from a class.
   * @param {CaslAbilityFactory} caslAbilityFactory - This is the factory that will be used to create
   * the ability.
   */
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  /**
   * It gets the list of policies from the handler metadata, creates an ability for the user, and then
   * executes each policy handler
   * @param {ExecutionContext} context - ExecutionContext - This is the context of the request.
   * @returns A boolean value.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    const { user } = context.switchToHttp().getRequest();
    const ability = await this.caslAbilityFactory.createForUser(user);

    return policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, ability),
    );
  }

  /**
   * If the handler is a function, call it with the ability as the argument. If the handler is an
   * object, call its handle method with the ability as the argument
   * @param {PolicyHandler} handler - PolicyHandler - this is the policy handler that we're going to
   * execute.
   * @param {AppAbility} ability - The ability object that is being checked.
   * @returns A boolean value
   */
  private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
