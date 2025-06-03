import mongoose from "mongoose";

// const URI = "mongodb://127.0.0.1:27017/CRP";

const URI ="mongodb+srv://premsagar823:UyzW1gm0ozG6xb6N@cluster0.xgyolnu.mongodb.net/CRP?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () =>{
    try{
       await mongoose.connect(URI) 
       console.log("Connection successful to DB");
    } catch(error){
    console.error("Connection failed to DB ");
    process.exit(0);
    }
}
export default connectDB;