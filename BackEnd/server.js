
import ConnectDB from "./database.js";
import express from "express"
import dotenv from 'dotenv';

// load dot env to the server (environment variables) not accessible directly to node
dotenv.config();

const app = express()
// Test the connection
ConnectDB();

// Start your server (optional)
const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
