import jwt from "jsonwebtoken";
import User from "../models/user-model.js"

const authMiddleware = async(req, res, next) =>{
  const token = req.header("Authorization");
  console.log("Raw Authorization header:", token); // token

  if(!token){
    return res
    .status(401)
    .json({msg: "Unathorized HTTP, Token not provided"}) ;
  }
   const jwtToken = token.split(" ")[1];
   console.log("token from auth middleware", jwtToken);

   try{
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({email: isVerified.email }).
    select({
        password: 0,
    });

    console.log(userData);
    
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
   }catch(error){
    return res.status(401).json({message: "Unathorized. Invalid token. "});
   }
};

export default authMiddleware;