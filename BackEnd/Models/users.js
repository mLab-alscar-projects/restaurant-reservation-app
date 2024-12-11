import mongoose from "mongoose";
import bcrypt from "react-native-bcrypt";
import validator from "validator";

// Creating a user schema with signing fields
const clientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
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

// Updating the matchPasswords method to return a Promise
clientSchema.methods.matchPasswords = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, isMatch) => {
            if (err) {
                reject(err); // Reject on error
            }
            resolve(isMatch); // Resolve with the result
        });
    });
};

const User = mongoose.model("Clients", clientSchema, "clients");

export default User;
