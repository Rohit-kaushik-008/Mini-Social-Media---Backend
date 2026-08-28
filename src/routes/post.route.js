import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/feed", authMiddleware);
router.post("/addPost", authMiddleware, upload.single("image"), createPost);
router.patch("/editPost/:id", authMiddleware);
router.delete("/deletePost/:id", authMiddleware);

export default router;
