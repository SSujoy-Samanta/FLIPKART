import mongoose from "mongoose";

const Schema=mongoose.Schema;

const userSchema= new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    Name:{
        type:String,
        required:true,
        trim:true,
        max:30
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    mobile:{
        type:Number,
        required:true,
        min:10
    },
    username:{
        type:String,
        trim:true,
        required:true,
        min:7,
    },
    password:{
        type:String,
        required:true,
        min:5,
    },
    country:{
        type:String,
        required:true,
    },
    
    
});

const User=mongoose.model("User",userSchema);

export default User;