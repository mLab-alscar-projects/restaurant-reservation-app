import mongoose from "mongoose";
import bcrypt from "react-native-bcrypt"
import validator from "validator";

// Creating a user schema with signing fields
const clientSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique: true,
        validate: [validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required: true,
        validate: {
            validator: function(value) {
                // Regex to validate password complexity
                return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#^@$!%*?&-]).{8,}$/.test(value);
            },
            message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long."
        }
    }
});

const User = mongoose.model("Clients",clientSchema, "clients");

export default User;