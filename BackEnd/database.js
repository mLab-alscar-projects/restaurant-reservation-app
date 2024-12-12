import mongoose from "mongoose";

// Establish connection with MongoDB
const ConnectDB = async ()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://okpoco15:um1epCFcasGe2gGw@mlab.aibl7.mongodb.net/');
        console.log(`MongoDb connected: ${connection.connection.host}`)
    } catch (error) {
        console.error(`Error:${error}`)
    }
}

export default ConnectDB