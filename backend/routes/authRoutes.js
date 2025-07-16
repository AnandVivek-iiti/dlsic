import express from "express";
import { User } from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { verifyToken } from "./middlewares/authMiddleware.js";
import { checkRole } from "../utils/checkRoles.js";
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
const isEmail = (str) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(str);

// SIGNUP
router.post("/signup", async (req, res) => {
   res.send("welcome to signup");
  try {
    const {
      username,
      phone,
      email,
      password,
      profileImage,
      role,
      class: studentClass,
      stream,
      department,
      education,
      experience,
      passingYear,
      currentCompany,
      skills,
    } = req.body;

    // Required field check
    if (!username || !phone || !email || !password ) {                   // || !role
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      phone,
      email,
      password: hashedPassword,
      profileImage,
      role,
      class: studentClass,
      stream,
      department,
      education,
      experience,
      passingYear,
      currentCompany,
      skills,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    console.log("Signup Payload:", req.body);
    res.status(201).json({ message: "Signup successful!", token, user });
  }
   catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({
      message: "Server error during signup",
      error: err.message,
      details: err.errors || null,
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  console.log("welcome to login");
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: "Please enter credentials" });
  }

  const queryField = isEmail(identifier) ? "email" : "phone";
  try {
    const user = await User.findOne({ [queryField]: identifier });
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found. Please sign up." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful!", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// AUTH MIDDLEWARE
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

// PROFILE GET
router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// PROFILE UPDATE
router.put("/profile", authMiddleware, async (req, res) => {
  const { username, phone, email, profileImage } = req.body;
  const updated = await User.findByIdAndUpdate(
    req.userId,
    { username, phone, email, profileImage },
    { new: true }
  ).select("-password");

  res.json({ message: "Profile updated", user: updated });
});
export default router;
