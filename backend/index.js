import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();


//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server Running");
})