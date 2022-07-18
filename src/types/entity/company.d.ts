import mongoose from 'mongoose'
import { IUserDoc } from './user'

interface ICompanyDoc extends mongoose.Document {
  name: string,
  users: Array<IUserDoc>
}

interface CompanyModel extends mongoose.Model<ICompany> {}

export {ICompanyDoc, CompanyModel}