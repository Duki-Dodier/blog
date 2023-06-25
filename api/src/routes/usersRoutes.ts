import express, { Request, Response } from "express";
import usersController from "../controllers/UsersController"

const router = express.Router();

router.post("/", usersController.register);

export default router;
