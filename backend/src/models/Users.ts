import mongoose, { Schema } from "mongoose";
import { User } from "types/UsersTypes";

const UserSchema: Schema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"], 
        required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const UserModel = mongoose.model<User>("User", UserSchema);