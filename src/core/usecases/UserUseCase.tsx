import { IUserUseCase } from "../adapters/in/IUserUseCase";
import { IUserRepository } from "../adapters/out/IUsersRepository";
import { User } from "../entities/Entities";

export class UserUseCase implements IUserUseCase {
    constructor(private userRepository: IUserRepository) {}
  
    async getUserById(id: string): Promise<User> {
      return await this.userRepository.getUserById(id);
    }
  
    async getAllUsers(): Promise<User[]> {
      return await this.userRepository.getAllUsers();
    }
  }
  