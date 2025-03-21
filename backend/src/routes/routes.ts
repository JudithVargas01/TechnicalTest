import { Router } from "express";
import { findUsers, findUsersById, createUser, updateUser, deleteUser } from "@controllers/usersControllers";
import { findTickets, findTicketsById, createTicket, updateTicket, deleteTicket } from "@controllers/ticketsController";
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

    // Tickets Routes
    router.get("/tickets", findTickets);
    router.get("/tickets/:id", findTicketsById);
    router.post("/tickets", createTicket);
    router.put("/tickets/:id", updateTicket);
    router.delete("/tickets/:id", deleteTicket);

  return router;
};
