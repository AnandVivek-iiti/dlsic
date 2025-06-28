import express from 'express';
import User from '../models/UserSchema.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, phone, email, password, profileImage } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = new User({
      username,
      phone,
      email,
      password,  // In real apps, hash this!
      profileImage
    });

    await user.save();
    res.status(201).json({ message: "Signup successful!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup" });
  }
});

export default router;
