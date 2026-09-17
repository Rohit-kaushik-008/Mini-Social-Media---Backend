import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  commentPost,
  getCommentCount,
  uncommentPost,
  getPostComments
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/comment/:id", authMiddleware, commentPost);
router.post("/uncomment/:id", authMiddleware, uncommentPost);
router.get("/commentCount/:id", authMiddleware, getCommentCount);
router.get("/PostComments/:id", authMiddleware, getPostComments);

export default router;
