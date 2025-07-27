// server/app.ts
import express, { Application } from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoute";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

// Middleware

// enable cors
app.use(cors());
// body parser, reading data from the body into req.body
app.use(express.json());

// Routes
app.use("/api/notes", notesRoutes);

export default app;
