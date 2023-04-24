const UserModel=require('../models/user.model');

class UserService{

    static async registerUser(email, password){
    try {
        const cerateUser=new UserModel({email,password});
        return await cerateUser.save();
    } catch (error) {
        throw error;
    }
    }
}
module.exports=UserService;