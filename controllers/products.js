const productModel = require('../models/Product');

const createProduct =async (req,res)=>{
    try{
        const product = productModel(req.body);
        await product.save();
        res.status(201).json({message:"product created successfully"})
    }
    catch(err){
        res.status(400).json({message:"stupid bitch"})
    }

}
const getProducts = async(req,res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);
    }
    catch(err){
        console.log(err.message)
        res.status(404).json("page not found");
    }
}

module.exports= {createProduct,getProducts}