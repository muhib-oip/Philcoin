import { model, Schema, Document } from "mongoose";

export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";

export default interface User extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  email: string;
  password: string;
  refCode: string;
  signupCount: number;
}

const schema = new Schema(
  {
    firstName: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    lastName: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    role: {
      type: Schema.Types.String,
      default: 'user',
      enum: ['user', 'admin']
    },
    phone: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    refCode: {
      type: Schema.Types.String,
      trim: true,
    },
    signupCount: {
      type: Schema.Types.Number,
      default: 0,
      required: false
    },
    email: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    password: {
      type: Schema.Types.String,
      trim: true,
      select: false,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);
