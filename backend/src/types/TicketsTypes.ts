import { Query, Repository } from "./RepositoryTypes";
import { User } from "./UsersTypes"; 

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: "open" | "in progress" | "resolved";
  assignedUser?: User | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITicketRepository extends Repository<Ticket> {}

export interface ITicketService {
  createTicket(ticket: Ticket): Promise<Ticket>;
  findTickets(query?: Query): Promise<Ticket[]>;
  findTicketById(id: string): Promise<Ticket | null>;
  updateTicket(id: string, ticket: Partial<Ticket>): Promise<Ticket | null>;
  deleteTicket(id: string): Promise<boolean>;
}