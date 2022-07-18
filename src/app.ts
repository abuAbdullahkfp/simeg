import express from 'express'
import helmet from 'helmet'
import cors from 'cors' 
import {wizardRouter} from './routes/wizard-router'
import { errorHandler } from './error/error-handler'
import { authRouter } from './routes/auth-router'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())



app.use('/api', wizardRouter)
app.use('/api', authRouter)

app.use(errorHandler)
