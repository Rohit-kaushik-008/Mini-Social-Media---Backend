import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/feed", authMiddleware, getAllPosts);
router.get("/feed/:id", authMiddleware, getPost)
router.post("/addPost", authMiddleware, upload.single("image"), createPost);
router.patch("/editPost/:id", authMiddleware, updatePost);
router.delete("/deletePost/:id", authMiddleware, deletePost);

export default router;
