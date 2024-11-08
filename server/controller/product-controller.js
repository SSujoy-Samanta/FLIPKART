import Product from "../database/models/productScheme.js"



export const getProducts=async(req,res)=>{
    try{
        let products=await Product.find({});
        res.status(200).json(products);

    }catch(e){
        res.status(500).json({message:e.message});
    }
}

export const getProductDetails=async(req,res)=>{
    try{
        const id=req.params.id;
        let product=await Product.findOne({'id':id});
        res.status(200).json(product);

    }catch(e){
        res.status(500).json({message:e.message});
    }
}