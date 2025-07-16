import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloud.js";
import { Notes } from "../models/Notes.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const router = express.Router();

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Notes",
    allowed_formats: ["pdf", "jpg", "jpeg", "png", "docx"],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

// POST /api/notes/upload
router.post("/upload", upload.single("noteFile"), async (req, res) => {
  try {
    const { subject, classNumber, uploaderName } = req.body;
    const fileUrl = req.file.path;

    const note = new Notes({
      subject,
      classNumber,
      fileUrl,
      uploaderName,
    });

    await note.save();
    res.status(201).json({ message: "Note uploaded successfully", note });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

// GET /api/notes/:classNumber
router.get("/:classNumber", async (req, res) => {
  try {
    const classNumber = req.params.classNumber;
    const notes = await Notes.find({ classNumber });

    if (!notes.length) {
      return res.status(404).json({ message: "No notes found for this class" });
    }

    res.status(200).json(notes);
  } catch (err) {
    console.error("Fetch notes error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
