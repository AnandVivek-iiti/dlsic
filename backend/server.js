
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { User } from "./models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import profileRoutes from "./routes/profile.js";
import authRoutes from "./routes/authRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import uploadRoute from "./routes/Upload.js";
import uploadNotesRoutes from "./routes/uploadnotes.js";
import counselling  from "./routes/StudentRoutes/counselling.js"
import Feedback from "./routes/StudentRoutes/Feedback.js"
import grievances from './routes/StudentRoutes/grievances.js'
import { verifyToken } from "./routes/middlewares/authMiddleware.js";
import { checkRole } from "./utils/checkRoles.js";
import notificationRoutes from "./routes/notifications.js";

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "https://dlsic.vercel.app",
      "https://dlsic.onrender.com",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo")
  .then(() => console.log("✅ MongoDB connected Succesfully !! " ))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api", roleRoutes);
app.use("/api/upload", uploadRoute);
app.use("/api/notes", uploadNotesRoutes);
app.use("/upload", express.static("upload"));
app.use("/api/counselling",counselling);
app.use("/api/Feedback",Feedback);
app.use("/api/student/support/grievances",grievances);
app.use("/api/notifications", notificationRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// Health check
app.get("/api/ping", (req, res) => {
  res.json({ message: "✅ Backend is working fine!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
