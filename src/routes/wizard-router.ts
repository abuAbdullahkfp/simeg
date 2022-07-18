import {Router}  from 'express'
import { wizardController } from '../controllers/WizardController'
import { baseRouter } from './base-router'
import { asyncHandler } from '../utils/async-handler'

const router = Router()

router.get("/wizard/questions", asyncHandler(wizardController.getQuestions));
router.post("wizard/answers", asyncHandler(wizardController.postAnswers));
router.get("wizard/answers/:oid", asyncHandler(wizardController.getAnswers));

baseRouter.logRegisteredRoutes('WizardContoller', router)

export {router as wizardRouter}