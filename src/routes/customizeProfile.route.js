import express from "express";
import { customizeProfile } from "../controllers/customizeProfile.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.patch("/profile/:id", authMiddleware, customizeProfile);

export default router;
