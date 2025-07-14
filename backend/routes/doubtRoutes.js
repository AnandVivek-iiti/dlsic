import express from "express";
import Doubt from "../models/Doubts.js";
const router = express.Router();

// Submit doubt
router.post("/submit", async (req, res) => {
  const { userName, category, question } = req.body;
  try {
    const newDoubt = new Doubt({ userName, category, question });
    await newDoubt.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save doubt" });
  }
});

// Get all doubts (for user)
router.get("/list", async (req, res) => {
  const doubts = await Doubt.find();
  res.json(doubts);
});

export default router;
