// import mongoose from "mongoose";

// export const  connectDB = async () =>{

//     await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"));
   
// }

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("MongoDB URI not found in environment variables");
        process.exit(1);
    }

    try {
        await mongoose.connect(`${uri}`);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
}