import {Router} from 'express'

import { authController } from '../controllers/AuthController'
import { asyncHandler } from '../utils/async-handler';


const router = Router()


router.post("/auth/login", asyncHandler(authController.login));
router.post("/auth/signup", asyncHandler(authController.signup));


export {router as authRouter}