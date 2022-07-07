import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

/**
 * Class that represents the service that will manage users of the application
 */
@Injectable()
export class UserService {
  /** It's a TypeORM repository that will allow us to perform CRUD operations on the User entity. */
  @InjectRepository(User)
  private userRepository: Repository<User>;

  /**
   * It returns a promise that resolves to a user object or undefined
   * @param {string} emailOrUsername - string - This is the email or username that we're going to use
   * to find the user.
   * @returns A promise of a user or undefined
   */
  async findByUsernameOrEmail(
    emailOrUsername: string,
  ): Promise<User | undefined> {
    const result = this.userRepository.findOne({
      where: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
    return result;
  }
}
