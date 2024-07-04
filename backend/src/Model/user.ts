import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import {isEmail} from 'validator'
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, "Please enter your name"],
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'Please enter your email'],
        validate:[isEmail,"Please enter a valid email"]
    },
    password: {
        type: String,
        require: [true, 'Password is required'],
        minLenght: [6, "password should be minimum 6 character"]
    }
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password  = await bcrypt.hash(this.password as string,salt)
    next()
})
userSchema.statics.login= async function(email,password){
    const user = await User.findOne({email})
    
    if(user){
        const auth = await bcrypt.compare(password,user.password as string)
        if(auth){
            return user
        }
        else{
            throw Error("invalid Password")
        }
    }
    else{
        throw Error("Incorrect Email")
    }
}
const User = mongoose.model('User', userSchema)

export default User
