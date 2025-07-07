const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
       name : {
        type:String,
        required: true
       } , 
       email : {
        type:String,
        required: true,
        unique:true ,
        match: /^[a-zA-Z0-9_%+]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/
       },
       password:{
        type:String,
        required: true
       },
       address:{
        type:String
       },
       phone:{
        type:String
       }
    },
    {
        timestamps:true
    }
)

module.exports = new mongoose.model('User',userSchema)