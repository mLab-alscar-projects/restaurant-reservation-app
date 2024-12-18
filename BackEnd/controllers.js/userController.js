import User from "../Models/users.js";
import bcrypt from "bcrypt"
import generateToken from "../utils/token.js";

// user registering
const registerUser = async (req,res)=>{
    console.log(req.body);
    try {
        const {email,password} = req.body;
        // checks if the user exists in the db by email

        const userExists = await User.findOne({email})
        if (userExists){
            return res.status(400).json({
                error:"User already exits"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            email,
            password:hashedPassword
        })

        const token = await generateToken(User._id)
        res.status(201).json({
              message: "User registered successfully",
            _id:user._id,
            email:user.email,
            token
        })

    } catch (error) {
        if (error.name === "validationError"){
            res.status(400).json({error:error.message})
        }
        else{
            res.status(500).json({error:error.message})
            console.log(error.message)
        }
    }
}

// user login
const loginUser = async (req,res)=>{
    // get the user
    try {
        const {email,password} = req.body;
        console.log(email)
        const foundUser = await User.findOne({email});
        console.log(foundUser)

        // check the users password with the provided password
        if (!foundUser || !(await foundUser.matchPasswords(password))){
            return res.status(401).json({
                error:"invalid login credentials"
            })
        }

            // generate a token for registered users
            const token = generateToken(foundUser._id)
            res.status(200).json({
                message: "Login successful!",
                _id:foundUser._id,
                email: foundUser.email,
                token,
            })
                 
    } catch (error) {
        console.error("Login error:", error); // Log the error for debugging
        res.status(500).json({error:"internal server error"})
    }
}

// User Update Profile
const updateProfile = async (req, res) => {
    try {
        const { name, phoneNumber } = req.body;

        if (!name && !phoneNumber) {
            return res.status(400).json({ error: "Please provide at least one field to update (name or phone number)" });
        }

        const userId = req.user.id; // Assuming the user id is passed in `req.user.id` by your authMiddleware

        // Find and update the user
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, phoneNumber },
            { new: true }  // Return the updated user document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the updated profile
        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                name: updatedUser.name,
                phoneNumber: updatedUser.phoneNumber
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getProfile = async (req, res) => {
    try {
        const userId = req.user.id; 

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the user's name and phoneNumber
        res.status(200).json({
            user: {
                name: user.name,
                phoneNumber: user.phoneNumber
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export {
    loginUser,
    registerUser,
    updateProfile,
    getProfile
}