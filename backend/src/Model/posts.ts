import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    desc:{
        type:String
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    authorName:{
        type:String,
        required:true
    }
},{timestamps:true})


const Post = mongoose.model('Post',postSchema)
export default Post