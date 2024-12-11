import ConnectDB from "./database.js";
import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import router from "./routes/api.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // Add this line to parse JSON request bodies

// Enable CORS
app.use(cors());

// Test the database connection
ConnectDB();

// Use your API routes
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
