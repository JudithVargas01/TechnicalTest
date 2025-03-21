import mongoose, { Schema } from "mongoose";
import { Ticket } from "types/TicketsTypes";

const TicketSchema: Schema = new Schema<Ticket>(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        enum: ["open", "in progress", "resolved"], 
        required: true,
        lowercase: true,
    },
    assignedUser: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: false,
        default: null
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const TicketModel = mongoose.model<Ticket>("Ticket", TicketSchema);
