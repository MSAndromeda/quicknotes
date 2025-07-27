import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Note from "../models/Note";

interface NoteInput {
  title: string;
  content: string;
}

interface NoteParams {
  id: string;
}

// getNotes – GET all notes
const getAllNotes = async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(200).json({
    status: "success",
    data: {
      notes,
    },
  });
};

// getOneNote - GET a Note
const getOneNote = async (req: Request, res: Response) => {
  const note = await Note.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      note,
    },
  });
};

// createNote – POST a new note
const createNote = async (req: Request<{}, {}, NoteInput>, res: Response) => {
  const newNote = await Note.create(req.body);
  await newNote.save();
  res.status(201).json({
    status: "success",
    data: {
      data: newNote,
    },
  });
};

// updateNote – PATCH update a note
const updateNote = async (
  req: Request<NoteParams, {}, NoteInput>,
  res: Response
) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ status: "Fail", message: "Invalid note Id" });
  }
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // console.log("req body: ", req.body);
  // console.log("updated note: ", updated);
  res.status(200).json({
    status: "success",
    data: {
      data: updated,
    },
  });
};

// deleteNote – DELETE a note
const deleteNote = async (req: Request<NoteParams>, res: Response) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ status: "Fail", message: "Invalid note Id" });
  }
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: "success", data: null });
};

export default {
  getAllNotes,
  getOneNote,
  createNote,
  updateNote,
  deleteNote,
};
