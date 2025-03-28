import { Document } from "mongoose";
import { Query, Repository } from "./RepositoryTypes";


export interface User extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  comparePassword(password: string): Promise<boolean>;
}

export interface IUserRepository extends Repository<User> {
  findOne(query: Query): Promise<User | null>;
}

export interface IUserService {
  createUser(user: User): Promise<User>;
  findUsers(query?: Query): Promise<User[]>;
  findUsersById(id: string): Promise<User | null>;
  findUsersByEmail(email: string): Promise<User | null>;
  updateUser(id: string, user: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
}