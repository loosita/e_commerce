const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
        items:[{
                productId : {
                   type:mongoose.Schema.Types.ObjectId,
                   ref:'Product',
                   required:true
                   },
                name:String,
                quantity:Number,
                price:Number
    }],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'pending'
    }
    },
    {
        timestump:true
    });

module.exports = new mongoose.model('Order',orderSchema);