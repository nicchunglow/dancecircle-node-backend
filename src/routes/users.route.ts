import express, { NextFunction, Request, Response } from "express";
import * as UserController from "../controllers/users.controller";
const router = express.Router();

const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await UserController.getUsers();
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};
router.get("/", getUsers);

export default router;
