import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
import { Server } from "http";

dotenv.config({ path: "./config.env" });

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  throw new Error("Mongo URI not defined in environment variables.");
}

// DB connect
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error:", err));

const port: number = Number(process.env.PORT) || 8000;

const server: Server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
