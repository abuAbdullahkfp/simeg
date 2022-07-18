import mongoose from 'mongoose'
import {ICompanyDoc} from './company'

export interface IUserDoc extends mongoose.Document {
  email: string,
  company: ICompanyDoc,
  first_name: string,
  last_name: string,
  created_at: Date,
  updated_at: Date
}

export interface UserModel extends mongoose.Model<IUserDoc> {}