import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  classNumber: { type: String, required: true },
  fileUrl: { type: String, required: true },
  uploaderName: { type: String },
  uploadedAt: { type: Date, default: Date.now },
});

export const Notes = mongoose.model("Notes", NotesSchema);
