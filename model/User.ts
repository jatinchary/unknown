import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpriry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    require: [true, "User name is require"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Email is require"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is require"],
    trim: true,
  },
  verifyCode: {
    type: String,
    require: [true, "Password is require"],
  },
  verifyCodeExpriry: {
    type: Date,
    require: [true, "Password is require"],
  },
  isVerified: {
    type: Boolean,
    dfault: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  message: {
    type: [MessageSchema],
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
export default UserModel;
