const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Note = require("../models/Note");

// make connection to config.env file
dotenv.config({ path: "./config.env" });

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error:", err));

// read file data
const notes = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

// import data into db
const importData = async () => {
  try {
    await Note.create(notes);
    console.log("Data Successfully Loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Note.deleteMany();
    console.log("Data Successfully Deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}

if (process.argv[2] === "--delete") {
  deleteData();
}
