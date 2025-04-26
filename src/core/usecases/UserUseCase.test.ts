import { IUserRepository } from "../adapters/out/IUsersRepository";
import { Address, Company, Geo, User } from "../entities/Entities";
import { UserUseCase } from "./UserUseCase";

class MockUserRepository implements IUserRepository {
  async getUserById(id: string): Promise<User> {
    return new User(1, "Leanne Graham", "Bret", "Sincere@april.biz",new Address("adsf","asdf","asdf", "adsfa", new Geo("asdf", "asdf")), "", "", new Company("asdf", "afsd", "asdf"));
  }
  async getAllUsers(): Promise<User[]> {
    return [new User(1, "Leanne Graham", "Bret", "Sincere@april.biz",new Address("adsf","asdf","asdf", "adsfa", new Geo("asdf", "asdf")), "", "", new Company("asdf", "afsd", "asdf"))];
  }
}

describe("UserUseCase", () => {
  let userUseCase: UserUseCase;
  let mockRepository: MockUserRepository;

  beforeEach(() => {
    mockRepository = new MockUserRepository();
    userUseCase = new UserUseCase(mockRepository);
  });

  test("should fetch user by ID", async () => {
    const user = await userUseCase.getUserById("1");
    expect(user.name).toBe("Leanne Graham");
  });

  test("should fetch all users", async () => {
    const users = await userUseCase.getAllUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
