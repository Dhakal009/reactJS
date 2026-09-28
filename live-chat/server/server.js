import express from "express"
import cors from "cors"
import dotenv from "dotenv"


import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import conversationRouter from "./routes/conversationRoutes.js"
import messageRouter from "./routes/messageRoutes.js"

dotenv.config();
const app = express();

//datbase connetion
connectDB();


//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/conversations",conversationRouter)
app.use("/api/messages",messageRouter)

app.get("/",(req,res)=>{
    res.json({
        message:"Live chat api is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running of http://localhost:${PORT}`);
    
});