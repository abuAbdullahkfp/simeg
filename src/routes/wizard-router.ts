import {Router}  from 'express'
import { wizardController } from '../controllers/WizardController'

const router = Router()

router.route('/wizard/questions').get(wizardController.getQuestions)
router.route('wizard/answers').post(wizardController.postAnswers) 
router.route('wizard/answers/:oid').get(wizardController.getAnswers)

export {router as wizardRouter}