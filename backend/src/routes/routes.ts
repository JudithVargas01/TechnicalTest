import { Router } from "express";
import { findUsers, findUsersById, createUser, updateUser, deleteUser } from "@controllers/usersControllers";
import { login, register } from "@controllers/authController";

const router = Router();

export default () => {
  router.get("/health", (req, res) => {
    res.send("Api is good");
  });

  // Auth Routes
  router.post("/auth/register", register);
  router.post("/auth/login", login);

  // Users Routes
  router.get("/users", findUsers);
  router.get("/users/:id", findUsersById);
  router.post("/users", createUser);
  router.put("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser);

  return router;
};
