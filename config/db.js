const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://sufi:sufi1234@cluster0.sxtz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB connected")
    }
    catch (err) {
        console.log("DB not connected due to error, error code:", err)
        process.exit(1)
    }
} 

module.exports=connectDB  