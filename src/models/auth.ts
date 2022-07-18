import mongoose from "mongoose";
import { AuthModel, IAuthDoc } from "../types/entity/auth";

const AuthSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    hashed_pass: { type: Buffer, required: true },
    salt: { type: Buffer, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
      },
    },
  }
);

const Auth = mongoose.model<IAuthDoc, AuthModel>('auth', AuthSchema)

export {Auth}