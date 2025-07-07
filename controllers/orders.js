const Product = require('../models/Product');
const orderModel = require('../models/Order');

const orderSomething = async (req,res) => {
    try{
        const {userId, items} = req.body;
        let totalAmount = 0;
        const itemsArray = [];

        for(let item of items){
            const product = await Product.findById(item.productId);
            if(!product){
                res.status(404)
            }
            const thisOnePrice = product.price * item.quantity ;
            totalAmount += thisOnePrice;
            itemsArray.push(
                {
                    productId:product._id,
                    name:product.name,
                    price:product.price,
                    quantity:product.quantity
                }
            )
        }
        const order = orderModel({
            userId,
            itemsArray,
            totalAmount,
        });
        await order.save();
        res.status(201).json({message:"You did order!"});
    }
    catch(err){
        res.status(500).json({message:"something went wrong while ordering something"});
    }
}
const getOrders = async (req,res) =>{
    try{const order =await orderModel.find({userId:req.params.id});
    res.status(200).json(order);
}
catch(err){
    res.status(404).json({message:"page not found"})
}
}
module.exports = {orderSomething,getOrders}  