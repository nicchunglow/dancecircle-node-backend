import express, { NextFunction, Request, Response } from 'express'
import * as UserController from '@/src/controllers/users.controller'
const router = express.Router()

const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await UserController.getAllUsers()
    res.status(200).send(response)
  } catch (err) {
    next(err)
  }
}
router.get('/', getUsers)

export default router
