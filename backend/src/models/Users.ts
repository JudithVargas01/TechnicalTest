import mongoose, { Schema } from "mongoose";
import { User } from "types/UsersTypes";
import bcrypt from "bcrypt";

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
    password: {
      type: String,
      required: true,
      trim: true
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

UserSchema.pre<User>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
  next();
});

UserSchema.method("comparePassword", async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password as string);
});

UserSchema.methods.toJSON = function () {
  const userObj = this.toObject();
  delete userObj.password;
  return userObj;
};
export const UserModel = mongoose.model<User>("User", UserSchema);