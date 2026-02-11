const mongoose=require("mongoose");


const connectDB=async()=>{  
        try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected successfully ✅");
    } catch (err) {
        console.log("Database connection error:", err);
    }
}   

module.exports=connectDB;