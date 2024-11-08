import mongoose from "mongoose";



export const Connection=async()=>{
    const url='mongodb://localhost:27017/Flipkart';
    try{
        await mongoose.connect(url)
        console.log("DB connected");
    }catch(err){
        console.log("Error While conecting Database ",err.message);
    }
}

export default Connection;