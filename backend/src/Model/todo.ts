import mongoose from "mongoose";

const todo = new mongoose.Schema({
    desc:{
        type:String,
        required:[true,"Post are must"]
    },
    completed:{
        type:Boolean,
        default:false
    },
})


const Todo = mongoose.model('todo',todo)
export default Todo