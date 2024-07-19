import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DATABSE_URL}/${DB_NAME}`)
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB;