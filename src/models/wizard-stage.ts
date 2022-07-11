import mongoose from 'mongoose' 
import { WizardStageModel, WizardStageDoc } from '../types/entity/wizard-stage'


const WizardStageSchema = new mongoose.Schema({
  questions: [
    {type: mongoose.Types.ObjectId, ref: 'questions'}
  ]
})

export const WizardStage = mongoose.model<WizardStageDoc,WizardStageModel>(
  "wizardstages",
  WizardStageSchema
);