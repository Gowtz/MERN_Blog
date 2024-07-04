import { Router } from "express";
import { auth } from "../Middleware/auth";
import { addPost, getPost } from "../Controller/posts";



const router = Router()

router.route('/').get(getPost).post(auth,addPost)



export default  router