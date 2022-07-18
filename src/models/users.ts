import mongoose from 'mongoose' 
import { IUserDoc, UserModel } from '../types/entity/user'


const UserSchema = new mongoose.Schema({
  email: {type: String, required: true},
  company: {type: mongoose.Types.ObjectId, required: true, ref: 'company'},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
}, {timestamps: true, versionKey: false, toJSON: {transform(doc, ret, options) {ret.id = ret._id}}})


const User = mongoose.model<IUserDoc, UserModel>('users', UserSchema)  

export {User}