import mongoose from 'mongoose'
import { QuestionModel, QuestionDoc } from '../types/entity/question'

const QuestionSchema = new mongoose.Schema({
  category: {type: String, required: true},
  questions: {type: String, required: true},
  type: {type: String, required: true},
  options: [{
    value: {type: String}
  }]
})

export const Question = mongoose.model<QuestionDoc, QuestionModel>('questions', QuestionSchema)


