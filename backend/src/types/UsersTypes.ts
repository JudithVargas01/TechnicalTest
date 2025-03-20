import { Repository } from "./RepositoryTypes";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  role: "user" | "admin";
}

export interface IUserRepository extends Repository<User> {}

export interface IUserService {
    createUser(user: User): Promise<User>;
    findUsers(): Promise<User[]>;
    findUsersById(id: string): Promise<User | null>;
    updateUser(id: string, user: Partial<User>): Promise<User | null>;
    deleteUser(id: string): Promise<boolean>;
  }