// Task 1: Implement User Authentication with JWT
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

import cors from "cors";

dotenv.config();

//Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => {
    console.log("Connected to db");
  },
  (err) => {
    console.log("Something went wrong" + err);
  }
);

const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to API" });
});

//Middleware to handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
