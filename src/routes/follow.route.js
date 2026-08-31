import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  followUser,
  getProfileStats,
  unfollowUser,
} from "../controllers/follow.controller.js";

const router = express.Router();

router.post("/follow/:id", authMiddleware, followUser);
router.post("/unfollow/:id", authMiddleware, unfollowUser);
router.get("/stats", authMiddleware, getProfileStats);

export default router;
