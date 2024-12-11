import jwt from "jsonwebtoken"
import User from "../Models/users.js";

const protect = async (req, res, next) => {
    let token;
    console.log("This is the user Token",req.headers.authorization); // Log the token for debugging

    // Check if the Authorization header exists and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Extract the token from the "Bearer <token>" format
            token = req.headers.authorization.split(" ")[1];

            // Verify the token using jwt.verify
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user by ID and exclude the password field
            req.user = await User.findById(decoded.id).select("-password");

            // Proceed to the next middleware
            next();
        } catch (error) {
            console.error("Token verification failed:", error);
            res.status(401).json({ error: "Not authorized, token failed" });
        }
    } else {
        res.status(401).json({ error: "Not authorized, no token" });
    }
};

export default protect;