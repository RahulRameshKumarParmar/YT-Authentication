import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MongoDBurl, {
            dbName: "MernAuthentication",
        }) 
        console.log("sucessfully connected with your db");
    }
    catch(error){
        console.log("Failed to connect");
    }
}

export default connectDB;