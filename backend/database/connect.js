import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;  // Get MongoDB connection string from environment variables

        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }

        const conn = await mongoose.connect(MONGO_URI);  // connnect to MongoDB database url
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Error: ${error}`);
        }
    }
}

export default connectDB;