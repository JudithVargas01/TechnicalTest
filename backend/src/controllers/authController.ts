import { UserRepository } from "@repositories/userRepository";
import { UserService } from "@services/userService";
import { Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
import jwt from "jsonwebtoken";

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body; 
    const userExists = await userService.findUsersByEmail(email);

    if (userExists) {
      res.status(400).json({ message: "Email already exists!" });
      return;
    }
    if(role == "admin"){
      res.status(400).json({ message: "Insufficient permissions!" });
      return;
    }
    const newUser = await userService.createUser(req.body);

    res.status(201).json(newUser);
  
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
   
  }
};

export const login = async (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET as string   
  try {
    const { email, password }: User = req.body;

    const user = await userService.findUsersByEmail(email);
    if (!user) {
      res.status(400).json({ message: "Invalid user or password" });
      return;
    }

    const comparePass = await user.comparePassword(password);
    if (!comparePass) {
      res.status(400).json({ message: "Invalid user or password" });
      return;
    }

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role }, jwtSecret, { expiresIn: "1h" });
    console.log(token);
    res.json({
      success: 'Login',
      token: token,
      userRole: user.role
  });
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
}; 