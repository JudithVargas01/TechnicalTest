import { Router } from "express";
import { findUsers, findUsersById, createUser, updateUser, deleteUser, updateUserRole } from "@controllers/usersControllers";
import { findTickets, findTicketsById, createTicket, updateTicket, deleteTicket } from "@controllers/ticketsController";
import { login, register } from "@controllers/authController";
import { verifyToken } from "@middlewares/auth";
import { authRole } from "@middlewares/authRole";
const router = Router();

export default () => {
  router.get("/health", (req, res) => {
    res.send("Api is good");
  });

  // Auth Routes
  router.post("/auth/register", register);
  router.post("/auth/login", login);

  // Users Routes
  router.get("/users", verifyToken,  findUsers);
  router.get("/users/:id", verifyToken, authRole(["admin"]), findUsersById);
  router.post("/users", verifyToken, authRole(["admin"]), createUser);
  router.put("/users/:id", verifyToken, authRole(["admin"]), updateUser);
  router.delete("/users/:id", verifyToken, authRole(["admin"]), deleteUser);
  router.put("/users/:id", verifyToken, authRole(["admin"]), updateUserRole);

    // Tickets Routes
    router.get("/tickets", verifyToken, authRole(["admin"]), findTickets);
    router.get("/tickets/:id", verifyToken, authRole(["admin"]), findTicketsById);
    router.post("/tickets", verifyToken, createTicket);
    router.put("/tickets/:id",verifyToken, updateTicket);
    router.delete("/tickets/:id", verifyToken, authRole(["admin"]), deleteTicket);

  return router;
};
