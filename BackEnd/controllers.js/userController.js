import User from "../Models/users.js";
import bcrypt from "bcrypt"

const registerUser = async (req,res)=>{
    console.log(req.body);
    try {
        const {email,password} = req.body;
        // checks if the user exists in the db by email

        const userExists = await User.findOne({email})
        if (userExists){
            return res.status(400).json({
                error:"User already exixts"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            message: "User registered successfully",
            user: { email: user.email } // Optionally include user details, but avoid including password
        });


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
        

    } catch (error) {
        console.error("Login error:", error); // Log the error for debugging
        res.status(500).json({error:"internal server error"})
    }
}

export {
    loginUser,
    registerUser
}