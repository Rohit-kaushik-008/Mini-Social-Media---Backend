import express from "express";
import { customizeProfile } from "../controllers/customizeProfile.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();


// POST /user/customize/profile/:id
router.patch(
  "/profile/:id",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  authMiddleware,
  customizeProfile,
);

export default router;
