import express from "express";
import { customizeProfile } from "../controllers/customizeProfile.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();


// POST /user/customize/profile/:id
router.patch(
  "/profile/:id",
  authMiddleware,
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  customizeProfile,
);

export default router;
