import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getProfileStats } from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/data", authMiddleware, getProfileStats);

export default router;
