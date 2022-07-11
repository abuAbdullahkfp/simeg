import {Request, Response} from 'express' 


export interface WizardControllerT {
  getQuestions(req: Request, res: Response): void,
  getAnswers(req: Request, res: Response): void,
  postAnswers(req: Request, res: Response): void
}