const userModel = require('../models/User');

const createUser =async  (req,res)=>{
    try{
        const user = userModel(req.body);
        await user.save();
        const jwt = user._id.toString();
        res.status(201).send(jwt);
    }
    catch(err){
        res.status(400).json("something went wrong")

    }
}

const getUsers = async (req,res)=>{
    try{
        const users = await userModel.find();
        res.status(200).json(users)
    }
    catch(err){
        res.status(404).json("page not found")
    }
}
module.exports = {createUser,getUsers};
