import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        require: true
    },
    email:{
        type : String,
        require: true
    },
    password:{
        type : String,
        require: true
    },
    isAdmin:{
        type : Boolean,
        default: false
    },
});

//secure the password by bcrypt
userSchema.pre("save",async function(next) {
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }catch(error){
       next(error);
    }
})
 //compare the password
 userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
 }  

//json web token
userSchema.methods.generateToken = function() {
    if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not defined");  // throw an error
  }

    try{
        return jwt.sign({
            userId: this._id.toString(),
            email:  this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
    );
    } catch(error){
        console.error(error);
    }
};

//define the collection or model name
const User = mongoose.model("User", userSchema);
export default User;