import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { searchUser } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/user", authMiddleware, searchUser);

export default router;
