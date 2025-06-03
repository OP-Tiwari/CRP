import {z} from "zod";


//creating object schema
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast 3 characters"})
    .max(255, {message:"Name must not be more than 255 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "invalid email address"})
    .min(3, {message: "Email must be atleast 3 characters"})
    .max(255, {message:"Email must not be more than 255 characters"}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(7, {message: "Password must be atleast 7 characters"})
    .max(1024, {message:"Password must not be more than 1024 characters"}),
})

export default signupSchema;
