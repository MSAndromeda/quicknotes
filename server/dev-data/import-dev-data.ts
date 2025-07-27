import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Note from "../models/Note";

// make connection to config.env file
dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URI;
if (!DB) {
  console.error(
    "MongoDB connection string (MONGO_URI) not found in environment."
  );
  process.exit(1);
}

// connect to database
mongoose
  .connect(DB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("DB error:", err);
    process.exit(1);
  });

type N = {
  title: string;
  content: string;
};

// read file data
const notes: N[] = JSON.parse(
  fs.readFileSync(`${__dirname}/data.json`, "utf-8")
);

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
