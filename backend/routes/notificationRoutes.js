import express from "express";
import {Notification} from "../models/Notification.js";

const router = express.Router();

// 🔔 GET /api/notifications - Get all notifications
router.get("/", async (req, res) => {
  try {
    const notifs = await Notification.find({}, "_id title message timestamp")  // explicitly return only these fields
      .sort({ timestamp: -1 }); // newest first

    res.status(200).json(notifs);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Error fetching notifications", error });
  }
});

// 🔔 POST /api/notifications - Add a new notification
router.post("/", async (req, res) => {
  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(400).json({ message: "Title and message are required" });
  }

  try {
    const newNotif = new Notification({ title, message });
    await newNotif.save();
    res.status(201).json(newNotif);
  } catch (err) {
    console.error("Failed to save notification:", err);
    res.status(500).json({ message: "Failed to save notification", error: err });
  }
});

export default router;
