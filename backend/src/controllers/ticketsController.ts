import { TicketRepository } from "@repositories/ticketRepository";
import { TicketService } from "@services/ticketService";
import { Request, Response } from "express";
import { ITicketRepository, ITicketService, Ticket } from "types/TicketsTypes";

const ticketRepository: ITicketRepository = new TicketRepository();
const ticketService: ITicketService = new TicketService(ticketRepository);

// Get all tickets
export const findTickets= async (req: Request, res: Response) => {
  try {
    const tickets = await ticketService.findTickets();
    if (tickets.length === 0) {
      res.status(404).json({ message: "No tickets found." });
      return;
    }

    res.json(tickets);
  } catch (error) {
    console.error("Error in findTickets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get ticket by id
export const findTicketsById = async (req: Request, res: Response) => {
  try {
    const ticket = await ticketService.findTicketById(req.params.id);
    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    res.json(ticket);
  } catch (error) {
    console.error("Error in findTicketById:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create ticket
export const createTicket = async (req: Request, res: Response) => {
  try {
    const newTicket: Ticket = req.body;
    const result = await ticketService.createTicket(newTicket);

    res.status(201).json(result);
  } catch (error) {
    console.error("Error in createTicket:", error);
    res.status(400).json({ error: "Bad Request" });
  }
};

// Update ticket
export const updateTicket = async (req: Request, res: Response) => {
  try {
    const updateTicket = await ticketService.updateTicket(req.params.id, req.body);
    if (!updateTicket) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(updateTicket);
  } catch (error) {
    console.error("Error in updateTicket:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete ticket
export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const deleteTicket = await ticketService.deleteTicket(req.params.id);
    if (!deleteTicket) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
