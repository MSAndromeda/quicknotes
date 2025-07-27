import { Router } from "express";
import noteController from "../controllers/noteController";

const router = Router();

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

export default router;
