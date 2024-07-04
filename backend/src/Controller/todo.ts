import { Request, Response } from "express";
import { Error } from "mongoose";
import Todo from "../Model/todo";

const handlerror = (err:Error) => {
    // console.log(err)
    const error = {error:""}
    return error
}

export const addNewPost = async (req: Request, res: Response) => {
    const {desc} = req.body;
    try {
        const data = await Todo.create({desc}) 
        res.status(200).json({"msg":"added post"})
    } catch (error) {
        res.json(handlerror(error))
    }
}
export const  getTodo = async (req: Request, res: Response) => {
    try {
        const data = await Todo.find().limit(10)
        res.status(200).json({"msg":data})
    } catch (error) {
        res.json(handlerror(error))
    }
}