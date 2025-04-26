import { User } from "../../entities/Entities";

export interface IUserUseCase {
    getUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
  }
  