import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username : {type : String, required : true},
    email : {type : String, required : true},
    message  : {type : String, required : true},
})

//create model or collection

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;