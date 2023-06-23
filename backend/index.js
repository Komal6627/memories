import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();


//middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3001",
    })
  );

app.use(cookieParser())

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
    console.log("Server Running");
})