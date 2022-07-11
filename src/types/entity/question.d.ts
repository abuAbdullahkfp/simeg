import mongoose from 'mongoose' 

interface QuestionOption {
  value: string
}

export interface QuestionModel extends mongoose.Model<QuestionDoc> {

}

export interface QuestionDoc extends mongoose.Document {
  category: string,
  question: string,
  type: string,
  options: Array<QuestionOption>
}

