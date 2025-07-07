const mongoose  = require("mongoose");
const {URI} = require('../utils/config')


const connection =async  ()=>{
    try{
        const done = await mongoose.connect(URI);
        console.log("connected to mogodb!");
    }
    catch(err){
        console.log("something went wrong,",err.message);
        process.exit(1)
    }
}
module.exports = connection