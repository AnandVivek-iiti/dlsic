import mongoose from "mongoose";
import express from "express";
// import require from "express";
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
import { verifyToken } from "./routes/middlewares/authMiddleware.js";
import { checkRole } from "./utils/checkRoles.js";

const app = express();
// const port =" 0.0.0.0";
const PORT = process.env.PORT || 5000; //

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "https://dlsic.vercel.app",
      "https://dlsic.onrender.com",
      " http://localhost:5173"
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo") //process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo"
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/auth", authRoutes); // login, signup, profile
app.use("/api/profile", profileRoutes); // other profile routes
app.use("/api", roleRoutes); // role-based routes
app.use("/api/upload", uploadRoute); // uploads
app.use("/upload", express.static("upload"));

// SIGNUP
// app.post("/api/signup", async (req, res) => {
//   try {
//     const {
//       username,
//       phone,
//       email,
//       password,
//       profileImage,
//       role,
//       class: studentClass,
//       stream,
//       department,
//       education,
//       experience,
//       passingYear,
//       currentCompany,
//       skills,
//     } = req.body;

//     // Required field check
//     // if (!username || !phone || !email || !password || !role) {
//     //   return res
//     //     .status(400)
//     //     .json({ message: "All fields are required" });
//     // }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: "Email already registered" });
//     }

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const user = new User({
//       username,
//       phone,
//       email,
//       password: hashedPassword,
//       profileImage,
//       role,
//       class: studentClass,
//       stream,
//       department,
//       education,
//       experience,
//       passingYear,
//       currentCompany,
//       skills,
//     });

//     await user.save();

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
//     console.log("Signup Payload:", req.body);

//     res.status(201).json({ message: "Signup successful!", token, user });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({
//       message: "Server error during signup",
//       error: err.message,
//       details: err.errors || null,
//     });
//   }
// });
// Signup route
// app.post("/api/signup", async (req, res) => {
//   const { username, email, phone, password, profileImage, role } = req.body;

//   console.log(req.body);
//   try {
//     if (!username || !email || !phone || !password || !role) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email  });
//     if (existingUser) {
//       return res
//         .status(409)
//         .json({ message: "User already registered with this email" });
//     }

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const newUser = new User({
//       username,
//       email,
//       phone,
//       password: hashedPassword,
//       profileImage,
//       role,
//     }); // Store hashed password
//     await newUser.save();

//     const token = jwt.sign(
//       { userId: newUser._id, email: newUser.email },
//       JWT_SECRET,
//       { expiresIn: "2h" }
//     );

//     res
//       .status(201)
//       .json({ message: "User registered successfully!", token, user: newUser });
//   } catch (err) {
//     console.error("Signup error:", err);
//     if (err.name === "ValidationError") {
//       return res.status(400).json({ message: err.message });
//     }
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: err.message });
//   }
// });
// app.use('/api/auth', authRoutes);
// Login route
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "User not found. Please sign up." });
//     }
//     // Compare the provided password with the hashed password in the database
//     // bcrypt.compare returns a promise that resolves to true or false
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       JWT_SECRET,
//       { expiresIn: "2h" }
//     );

//     res.json({ message: "Login successful!", token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// });

// GET profile (protected)
// app.get("/api/profile", verifyToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
app.use("/api", roleRoutes); // /api/teacher-only, etc.
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

app.put("/api/Notes", async (req, res) => {
  try {
    const { NoteFile } = req.body;
    const Note = await Notes.findOne();
    if (!Note) return res.status(404).json({ message: "Notes not found" });
    res.json(NoteFile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

app.listen(PORT, () => {
  console.log(`Server running on address ${PORT}`); //http://localhost:
});
