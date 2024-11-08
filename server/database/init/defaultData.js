import { products } from "../../container/data.js";
import Product from "../models/productScheme.js";

const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log("Default Data Inserted");
    }catch(err){
        console.log("Error While inserting Default Data",err.message);
    }
}

export default DefaultData;