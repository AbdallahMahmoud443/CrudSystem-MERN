import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo Connect:${process.env.MONGO_URI}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // hint: process code 1 code means exit with failure,0 means success
    }
}