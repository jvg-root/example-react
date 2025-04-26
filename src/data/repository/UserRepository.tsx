import { User } from "../../core/entities/Entities";
import { IUserRepository } from "../../core/adapters/out/IUsersRepository";
import axios from "../../../node_modules/axios/index";

export class UserRepository implements IUserRepository {
  private API_URL = "https://jsonplaceholder.typicode.com/users";
  
  constructor(){

  }

  async getUserById(id: string): Promise<User> {
    try {
      const response = await axios.get(`${this.API_URL}/${id}`);
      return response.data as User;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("User not found");
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const response = await axios.get(this.API_URL);
      return response.data as User[];
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }
}
