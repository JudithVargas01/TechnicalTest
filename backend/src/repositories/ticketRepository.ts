import { TicketModel } from "@models/Ticket";
import { ITicketRepository, Ticket } from "types/TicketsTypes";

export class TicketRepository implements ITicketRepository {
  async create(data: Ticket): Promise<Ticket> {
    const newTicket = new TicketModel(data);
    return await newTicket.save();
  }

  async find(): Promise<Ticket[]> {
    return await TicketModel.find().exec();
  }

  async findById(id: string): Promise<Ticket | null> {
    return await TicketModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Ticket>): Promise<Ticket | null> {
    return await TicketModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await TicketModel.findByIdAndDelete(id).exec();
    return deleted !== null;
  }
}