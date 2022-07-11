import mongoose from 'mongoose'
import { QuestionDoc } from './question'

export interface WizardStageModel extends mongoose.Model<WizardDoc> {

}

export interface WizardStageDoc extends mongoose.Document {
  questions: Array<QuestionDoc>
}