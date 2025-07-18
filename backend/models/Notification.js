import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
});

export const Notification =mongoose.model("Notification", notificationSchema);
