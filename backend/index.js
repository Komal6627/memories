import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
const app = express();

//middleware
app.use(express.json())

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server Running");
})