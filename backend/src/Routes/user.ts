import { Router } from "express";
import { logout, signIn, signUp } from "../Controller/user";
import { auth } from "../Middleware/auth";

const router = Router()

router.post('/signin',signIn)
router.post('/signup',signUp)
router.post('/logout',logout)




export default  router