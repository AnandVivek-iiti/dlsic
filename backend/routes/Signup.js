// backend/routes/signup.js
import express from "express";
import { User } from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const {
      username,
      email,
      phone,
      password,
      profileImage,
      imageBase64,
      role,
      class: userClass,
      stream,
      department,
      education,
      experience,
      passingYear,
      currentCompany,
      skills,
    } = req.body;

    // Check if email already registered
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object with role-specific fields
    const userData = {
      username,
      email,
      phone,
      password: hashedPassword,
      profileImage,
      imageBase64,
      role,
    };

    if (role === "student") {
      userData.class = userClass;
      userData.stream = stream;
    } else if (role === "teacher") {
      userData.department = department;
      userData.education = education;
      userData.experience = experience;
    } else if (role === "alumni") {
      userData.passingYear = passingYear;
      userData.currentCompany = currentCompany;
      userData.skills = skills;
    }

    const user = new User(userData);
    await user.save();

    // JWT Token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    const requireRole = (role) => (req, res, next) => {
      if (req.user?.role !== role)
        return res.status(403).json({ message: "Forbidden" });
      next();
    };

    res.status(201).json({
      message: "Signup successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ message: "Server error during signup." });
  }
});

export default router;
