// server/index.js
const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notesRoute");
require("dotenv").config();

const app = express();

// Middleware

// enable cors
app.use(cors());
// body parser, reading data from the body into req.body
app.use(express.json());

// Routes
app.use("/api/notes", notesRoutes);

module.exports = app;
