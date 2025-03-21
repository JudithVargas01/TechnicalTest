import { Request, Response, NextFunction } from "express";
import { User } from "types/UsersTypes";

export const authRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.currentUser as User;

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    if (!roles.includes(user.role)) {
      res.status(403).json({ message: "Insufficient permissions" });
      return;
    }

    next(); 
  };
};
