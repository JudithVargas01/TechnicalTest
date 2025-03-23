import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/userService";
import { Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

// Get all users
export const findUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsers();
    if (users.length === 0) {
      res.status(404).json({ message: "No users found." });
      return;
    }

    res.json(users);
  } catch (error) {
    console.error("Error in findUsers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get user by id
export const findUsersById = async (req: Request, res: Response) => {
  try {
    const user = await userService.findUsersById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error in findUsersById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: User = req.body;
    const result = await userService.createUser(newUser);

    res.status(201).json(result);
  } catch (error) {
    console.error("Error in createUser:", error);
    res.json({ error: true });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      res.json({ message: "User not found" });
      return;
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.json({ error: true,  message: "true" });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserRole = async (req: Request, res: Response) => {
  const { userId, role } = req.body;


  if (role !== "admin" && role !== "user") {
    res.status(400).json({ message: "Invalid role" });
    return 
  }

  const user = await userService.findUsersById(userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return 
  }

  user.role = role;
  await user.save();
  res.json({ message: "User role updated successfully" });
};
