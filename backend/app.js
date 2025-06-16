import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import authRoutes from "./routes/authRouter.js";
import feedbackRoute from "./routes/feedback-router.js";
import connectDB from "./utils/db.js";
import errorMiddleware from "./middlewares/error-middleware.js";


const app = express();
connectDB()
const corsOptions = {
 origin:   "http://localhost:5173",
 methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
 credentials : true,
};
//middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/auth" , authRoutes);
app.use("/api/form", feedbackRoute);
app.get("/",(req,res) =>{
    res.send("Hi, I am root");
})

app.use(errorMiddleware);

app.listen(5000, ()=>{
    console.log("Server is listening at port 5000");  
});