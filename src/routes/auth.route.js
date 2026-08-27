import express from "express";
import { userRegister, userLogin, userLogout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/auth/register", userRegister)
router.post("/auth/login", userLogin)
router.post("/auth/logout", userLogout)

export default router;
