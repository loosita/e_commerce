const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : true,
            
        },
        description:{
            type:String,
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String
        },
        stock:{
            type:Number,
            required:true
        }
    },
    {
        timestamps: true
    }
);

module.exports = new mongoose.model('Product',productSchema);