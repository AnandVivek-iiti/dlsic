import express from "express";
import Notification from "../models/Notification.js";

const router = express.Router();

// GET /api/notifications - Get all notifications
router.get("/", async (req, res) => {
  try {
    const notifs = await Notification.find().sort({ timestamp: -1 });
    res.json(notifs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications" });
  }
});

// POST /api/notifications - Add a new notification
router.post("/", async (req, res) => {
  const { title, message } = req.body;
  try {
    const newNotif = new Notification({ title, message });
    await newNotif.save();
    res.status(201).json(newNotif);
  } catch (err) {
    res.status(400).json({ message: "Failed to save notification" });
  }
});

export default router;
