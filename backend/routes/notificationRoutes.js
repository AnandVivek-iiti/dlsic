import express from "express";
import {Notification} from "../models/Notification.js";

const router = express.Router();

// Get all notifications
router.get("/", async (req, res) => {
  try {
    const notifs = await Notification.find().sort({ timestamp: -1 });
    res.status(200).json(notifs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications" });
  }
});

// Add notification
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

// ✅ Mark as read
router.patch("/:id/read", async (req, res) => {
  try {
    const notif = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    res.json(notif);
  } catch (err) {
    res.status(500).json({ message: "Failed to mark as read" });
  }
});

// 🗑 Delete notification
router.delete("/:id", async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: "Notification deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
