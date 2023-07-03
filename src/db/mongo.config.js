import { connect } from "mongoose";
//import { DB_HOST, DB_NAME, DB_PORT, DB_CNN } from "../config/config.js";




const DB_HOST = "127.0.0.1";
const DB_PORT = 27017;
const DB_NAME = "ecommercedbSegPreEntrega";



const configConnection = {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}

const connectDB = async () => {
    try {
        await connect(configConnection.url, configConnection.options);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to database");
    }
}

export default connectDB;

