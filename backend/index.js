import express from "express";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

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


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// app.set("view engine","ejs")

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
  // console.log(file);
});
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
    console.log("Server Running");
})