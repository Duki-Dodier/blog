import express, { Request, Response } from "express";
import authController from "../controllers/AuthController"

const router = express.Router();

router.post("/", authController.login);

export default router;
