import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  commentPost,
  uncommentPost,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/comment/:id", authMiddleware, commentPost);
router.post("/uncomment/:id", authMiddleware, uncommentPost);

export default router;
