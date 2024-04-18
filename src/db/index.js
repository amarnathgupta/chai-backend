import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected || DB Host: ${connectionInstance.connection.host}`)
        application.on('error', () => {
            console.log("Express error while connecting to the database. ERROR : ",error);
            throw error;
        })
    } catch (error) {
        console.log("MongoDB connection error ",error);
        process.exit(1);
    }
}

export default connectDB