import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

const router = Router();

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export default () => {
  router.get("/health", (req, res) => {
    res.send("Api is good");
  });

  // Get all
  router.get("/users", async (req, res) => {
    const users = await userService.findUsers();
    res.json(users);
  });

  // Get by id
  router.get("/users/:id", async (req, res) => {
    const users = await userService.findUsersById(req.params.id);
    res.json(users);
  });

  // Create user
  router.post("/users", async (req, res) => {
    const newUser: User = req.body;
    const result = await userService.createUser(newUser);

    res.json(result);
  });

  // Update user
  router.put("/users/:id", async (req, res) => {
    const users = await userService.updateUser(req.params.id, req.body);
    res.json(users);
  });

  // Delete user
  router.delete("/users/:id", async (req, res) => {
    const users = await userService.deleteUser(req.params.id);
    res.json(users);
  });

  return router;
};