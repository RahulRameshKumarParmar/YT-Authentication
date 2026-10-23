import express from 'express';
import { registerUser, verifyOtp, myProfile } from '../controllers/user.js';
import { verifyUser } from '../controllers/user.js';
import { loginUser, refreshToken, logoutUser } from '../controllers/user.js';
import {isAuth} from '../middlewares/isAuth.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify/:token", verifyUser);
router.post("/login", loginUser);
router.post("/verify", verifyOtp);
router.get("/me", isAuth, myProfile);
router.post("/refresh", refreshToken);
router.post("/logout", isAuth, logoutUser);

export default router;