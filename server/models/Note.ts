import mongoose, { Document, Schema } from "mongoose";

// Typescript interface for the Note model
export interface INote extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  { timestamps: true }
);

const Note = mongoose.model<INote>("Note", NoteSchema);
export default Note;
