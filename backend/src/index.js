import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  }),
);

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
