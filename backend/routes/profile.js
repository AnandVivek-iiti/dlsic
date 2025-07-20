import express from "express";
import { verifyToken } from "./middlewares/authMiddleware.js";
import { User } from "../models/UserSchema.js";
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const router = express.Router();

router.get("/profile", verifyToken, async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
   if (user.role !== "student") {
      return res.status(403).json({ message: "Access denied. Only students can access profile." });
    }


    res.json({
      username: user.username,
      email: user.email,
      phone: user.phone,
      profileImage: user.profileImage || "",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
// UPDATE STUDENT PROFILE
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subjects,
      extraCurriculars,
      profileImage,
      bio,
    } = req.body;

    const updatedData = {
      name,
      email,
      phone,
      bio,
      profileImage,
      subjects: subjects || [],
      extraCurriculars: extraCurriculars || [],
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: updatedData },
      { new: true }
    ).select("-password");

    //  Allow only 'student' role to access profile editing
    if (updatedUser.role !== "student") {
      return res
        .status(403)
        .json({
          message: "Access denied. Only students can edit their profile.",
        });
    }
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "Profile updated!", user: updatedUser });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
