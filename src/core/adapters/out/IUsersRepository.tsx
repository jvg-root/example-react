import { User } from "../../entities/Entities";

export interface IUserRepository {
    getUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
  }
  
  