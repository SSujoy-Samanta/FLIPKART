import User from "../database/models/userSchema.js"
import {v4 as uuidv4} from 'uuid';


export const userSingUp=async(req,res)=>{
    try{
        const Exits=await User.findOne({username: req.body.username});
        if(Exits){
            return res.status(401).json({message:"username already exits"});
        }

        const user=req.body;
        user.id=uuidv4();
        const newUser=new User(user);
        await newUser.save();

        res.status(200).json({message:user});

    }catch(err){
        res.status(500).json({message:err.message});
    }
}
export const userLogin=async(req,res)=>{
    try{
        const Mobile=req.body.mobile;
        const Password=req.body.password;

        let user=await User.findOne({mobile:Mobile,password:Password});
        if(user){
            return res.status(200).json({data:user,message:"Login Successfull"});
        }
        else{
            return res.status(401).json({message:"Invalid Login"})
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}