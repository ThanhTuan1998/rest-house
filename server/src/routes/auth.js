import express from "express";
const router = express.Router();
import * as authController from "../controllers/auth";
router.post("/register", authController.register);
router.post("/login", authController.login);
export default router;
