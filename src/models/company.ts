import mongoose from 'mongoose'
import { CompanyModel, ICompanyDoc } from '../types/entity/company';


const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    users: [{ type: mongoose.Types.ObjectId, ref: "users" }],
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

const Company = mongoose.model<ICompanyDoc, CompanyModel>('company', CompanySchema)

export {Company}