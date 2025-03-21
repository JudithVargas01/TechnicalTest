import { ITicketRepository, ITicketService, Ticket } from "types/TicketsTypes";

export class TicketService implements ITicketService {
  private ticketRepository: ITicketRepository;

  constructor(ticketRepository: ITicketRepository) {
    this.ticketRepository = ticketRepository;
  }

  async createTicket(user: Ticket): Promise<Ticket> {
    return this.ticketRepository.create(user);
  }

  async findTickets(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  async findTicketById(id: string): Promise<Ticket | null> {
    return this.ticketRepository.findById(id);
  }

  async updateTicket(id: string, ticket: Partial<Ticket>): Promise<Ticket | null> {
    return this.ticketRepository.update(id, ticket);
  }

  async deleteTicket(id: string): Promise<boolean> {
    return this.ticketRepository.delete(id);
  }
}