import { Router } from "express";
import { auth } from "../Middleware/auth";
import { addNewPost, getTodo } from "../Controller/todo";


const router = Router()

router.get('/',getTodo)

router.post('/newtodo',auth,addNewPost)




export default  router