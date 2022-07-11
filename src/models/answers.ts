import mongoose from 'mongoose' 
import {AnswerModel, AnswerDoc} from '../types/entity/answer'

const AnswerSchema = new mongoose.Schema({
  company: {type: String, default: ''},
  contact_email: {type: String, default: ''},
  answers: [{
    questions_id: {type: mongoose.Types.ObjectId, ref: 'questions', required: true},
    type: {type: String, required: true},
    answer: {type: Object, required: true}
  }],
  insert_date: {type: Date, default: Date.now},
  last_update: {type: Date, default: Date.now}
})

const Answers = mongoose.model<AnswerDoc, AnswerModel>('answers', AnswerSchema)