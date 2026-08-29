import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { likePost, unlikePost } from "../controllers/like.controller.js";

const router = express.Router();

router.post("/like/:id", authMiddleware, likePost);
router.post("/unlike/:id", authMiddleware, unlikePost);

export default router;
