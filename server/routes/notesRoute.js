const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

// Get all notes
router.get("/", noteController.getAllNotes);

// Get one note
router.get("/:id", noteController.getOneNote);

// Add a note
router.post("/", noteController.createNote);

// Update a note
router.patch("/:id", noteController.updateNote);

// Delete a note
router.delete("/:id", noteController.deleteNote);

module.exports = router;
