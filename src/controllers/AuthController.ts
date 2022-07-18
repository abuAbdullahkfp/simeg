import mongoose from 'mongoose'
import {Request, Response, NextFunction} from 'express'
import { Company } from '../models/company'
import { User } from '../models/users'
import {Auth} from '../models/auth'
import { randomBytes } from 'crypto'

const AuthController  = () => {

  const signup = async (req: Request, res: Response, next: NextFunction) => {

    const session = await mongoose.startSession()

    session.startTransaction()

    const company = new Company({
      name: req.body.company_name
    })

    const users = new User({
      email: req.body.email,
      company: company,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    })

    company.users?.push(users)
    users.company = company

    const auth = new Auth({
      email: req.body.email,
      users,
      hashed_pass: randomBytes(30),
      salt: randomBytes(32)
    })

    await company.save({session})
    await users.save({session})
    await auth.save({session})
    
    await session.commitTransaction()
    res.status(201).json(users)

    session.endSession()
  }

  const login = async (req: Request, res: Response, next: NextFunction) => {
    throw new Error('this error is working now with error handler')
  }

  return {
    signup,
    login
  }
}

const authController = AuthController()

export {authController}