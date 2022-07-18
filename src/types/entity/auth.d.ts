import mongoose from 'mongoose'

import {IUserDoc} from './user'


export interface IAuthDoc extends mogoose.Document {
  email: string,
  user: IUserDoc,
  hashed_pass: Buffer,
  salt: Buffer,
  creation_date: Date,
  last_update: Date
}

export interface AuthModel extends mongoose.Model<IAuthDoc> {}