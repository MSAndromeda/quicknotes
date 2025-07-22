const Note = require("../models/Note");

// getNotes – GET all notes
exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({
    status: "success",
    data: {
      notes,
    },
  });
};

// createNote – POST a new note
exports.createNote = async (req, res) => {
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
exports.updateNote = async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    status: "success",
    data: {
      data: updated,
    },
  });
};

// deleteNote – DELETE a note
exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: "success", data: null });
};
