const cartModel = require('../models/Cart');

const addToCart = async (req,res)=>{
    try{
        const object = cartModel(req.body);
        await object.save();
        res.status(201).json("item added to cart successfully!");

    }
    catch(err){
        res.status(500).json({message:"something went wrong"});
    }
}

const getAllFromCart = async (req,res)=>{
    try{
        const allCart = await cartModel.find(req.body);
        res.status(200).json(allCart);
    }
    catch(err){
        res.status(500).json({message:"something went wrong"});
    }
}

module.exports = {getAllFromCart,addToCart};