import { Router } from "express";
import { addCheckUps, loginUser, logoutUser, registerUser } from "../controllers/userController.js"
import { verifyToken } from "../utils/verifyToken.js";

const router = new Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/logout', logoutUser)

router.post('/checkups', verifyToken, addCheckUps)

export default router