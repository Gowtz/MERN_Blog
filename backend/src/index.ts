import experess from 'express'
const app = experess();
import 'dotenv/config'
import userRoutes from "./Routes/user"
import todoRoutes from "./Routes/todo"
import postRoute from "./Routes/posts"
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from "cors"
import { getUserId } from './Middleware/auth';

const PORT = process.env.PORT || 3000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use(experess.json())
app.use(cookieParser())

app.use('/auth',userRoutes)
app.use('/todo' ,todoRoutes)
app.use('/post' ,postRoute)
app.get('/not-authenticated',(req,res)=>{
    res.send("<h1>Your are not authenticated</h1>")
})
app.get('/authenticate',getUserId)
mongoose.connect(process.env.MONGO_URI).then(()=>app.listen(PORT,()=>console.log(`server is running in http://localhost:${PORT}`))).catch(err => console.log("err in connecting Database"+err))
