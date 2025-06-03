import User from "../models/user-model.js";
import bcrypt from "bcryptjs";

 const home = async(req, res, next) =>{
    try{
        res.send("This is route path");
} catch(error){
 next(error);

};
}
   //Registration
  const register = async(req, res, next) =>{
    try{
        console.log(req.body);
        
        const {username, email, password} =req.body;   
        
        const userExists = await User.findOne({email}); 
        if(userExists) {
            return res.status(400).json({message: "email already exists"});
        }

        const userCreated = await User.create({
            username,
            email, 
            password,
        });
        res
        .status(201)
        .json({
            msg : "Registration successful", 
            token : userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch(error){
    //    res.status(500).json("internal server error");
    next(error);
    }
};

//login page
const login = async(req, res, next) =>{
    try{
        const { email, password } = req.body;

        const userExists = await User.findOne({email});
        console.log(userExists);

       if(!userExists){
        return res.status(400).json({message:"invalid credentials"})
       } 
        
       const user = await userExists.comparePassword(password);

      if(user){
         res
        .status(200)
        .json({
            msg : "Login successful", 
            token : userExists.generateToken(),
            userId: userExists._id.toString(),
        });
      }else{
        res.status(401).json({message: "invalid mail or password"});
      }
    }catch(error){
        // res.status(400).send({msg: "page not found"});
        next(error)
    }
};


export default { home, register, login };
