import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config()

const Connection =async()=>{

    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully!!!")
    }
    catch(error){
        console.error("Database connection Failed",error.message);
        process.exit(1)

    }
}

export default Connection;