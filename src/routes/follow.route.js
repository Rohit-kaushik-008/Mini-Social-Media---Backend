import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { followUser, unfollowUser } from "../controllers/follow.controller.js";

const router = express.Router();

router.post("/follow/:id", authMiddleware, followUser);
router.post("/unfollow/:id", authMiddleware, unfollowUser);

export default router;
