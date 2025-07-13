import mongoose from "mongoose";
import express from "express";
// const axios = require("axios");
// const cors = require("cors");
// import axios from "axios";
import cors from "cors";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import { User } from "./models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import profileRoutes from "./routes/profile.js";
import { checkRole } from "./utils/checkRoles.js";
// import { Notes } from "./routes/Upload.js";
const JWT_SECRET = process.env.JWT_SECRET;
import { verifyToken } from "./data/middlewares/authMiddleware.js";
import uploadRoute from "./routes/Upload.js";
const app = express();
// const port =" 0.0.0.0";
const PORT = process.env.PORT || '//localhost:5000/';

//  Add before routes if needed

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "https://dlsic.vercel.app",
      "https://dlsic.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));

mongoose
  .connect(process.env.MONGO_URI || process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/profile", profileRoutes);
// Signup route
app.post("/api/signup", async (req, res) => {
  const { username, email, phone, password, profileImage } = req.body;

  console.log(req.body);
  try {
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already registered with this email" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword,
      profileImage,
    }); // Store hashed password
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res
      .status(201)
      .json({ message: "User registered successfully!", token, user: newUser });
  } catch (err) {
    console.error("Signup error:", err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credential" });
    }
    // Compare the provided password with the hashed password in the database
    // bcrypt.compare returns a promise that resolves to true or false
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ message: "Login successful!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// GET profile (protected)
app.get("/api/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT profile (protected)
app.put("/api/profile", verifyToken, async (req, res) => {
  try {
    const { username, email, phone, profileImage } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      { username, email, phone, profileImage },
      { new: true }
    ).select("-password");
    res.json({ message: "Profile updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
});

// app.put("/api/Notes", async (req, res) => {
//   try {
//     const { NoteFile } = req.body;
//     const Note = await Notes.findOne();
//     if (!Note) return res.status(404).json({ message: "Notes not found" });
//     res.json(NoteFile);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
app.use("/api", uploadRoute);
app.use("/uploads", express.static("uploads"));
app.get("/teacher-only", verifyToken, checkRole(["teacher"]), (req, res) => {
  res.json({ message: "Welcome Teacher" });
});

app.get("/alumni-resource", verifyToken, checkRole(["alumni"]), (req, res) => {
  res.json({ message: "Hello Alumni!" });
});
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
