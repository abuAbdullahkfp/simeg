import mongoose from 'mongoose'

interface Ianswer {
  question_id: string,
  type: string,
  value: string
}

export interface AnswerModel extends mongoose.Model<AnswerDoc> {}

export interface AnswerDoc extends mongoose.Document {
  company: string,
  contact_email: string,
  answers: Array<Ianswer>,
  insert_date: Date,
  last_update: Date
}

