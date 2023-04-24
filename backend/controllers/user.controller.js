const UserService = require('../services/user.services');

exports.registerUser= async (req,res)=>{

    try {
        
        const {email,password}=req.body;

        const  successRes=await UserService.registerUser(email,password);

        res.json({status:true, success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}
exports.login= async (req,res)=>{

    try {
        
        const {email,password}=req.body;

        const  successRes=await UserService.registerUser(email,password);

        res.json({status:true, success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}