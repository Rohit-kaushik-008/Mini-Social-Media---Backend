import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  commentPost,
  getCommentCount,
  uncommentPost,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/comment/:id", authMiddleware, commentPost);
router.post("/uncomment/:id", authMiddleware, uncommentPost);
router.get("/commentCount/:id", authMiddleware, getCommentCount);

export default router;
