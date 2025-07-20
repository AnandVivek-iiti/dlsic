// import router from "../profile";
import express from "express";
import { Grievance } from "../models/Griev.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const grievance = new Grievance(req.body);
    await grievance.save();
    res.status(201).json({ message: "Grievance submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Submission failed", error: error.message });
  }
});

export default router ;