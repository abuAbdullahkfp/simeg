import express from 'express'
import helmet from 'helmet'
import cors from 'cors' 
import {wizardRouter} from './routes/wizard-router'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api', wizardRouter)

