import { WizardControllerT } from "../types/controller/wizard-controller"
import {Request, Response, Router} from 'express'
import { PostAnswersReqBody } from "../types/request/post-answers-response"
import { GetAnswersParams } from "../types/request/get-answers-request"


const WizardController = (): WizardControllerT => {

  const getQuestions = async (req: Request<{}, {}, PostAnswersReqBody, {}, {}>, res: Response) => {
    res.status(200).json('hello world')
  }
  const postAnswers = async (req: Request, res: Response) => {

  }
  const getAnswers = async (req: Request<GetAnswersParams, {}, {}, {}, {}>, res: Response) => {
    
  }

  return {
    getQuestions,
    getAnswers,
    postAnswers
  }

}

export const wizardController = WizardController()