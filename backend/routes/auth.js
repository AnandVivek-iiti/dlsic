import express from 'express';
import User from '../models/UserSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// SIGNUP
router.post('/signup', async (req, res) => {
  try {
    const { username, phone, email, password, profileImage } = req.body;

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
      profileImage
    });

    await user.save();
    res.status(201).json({ message: "Signup successful!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup" });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login successful!", token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// AUTH MIDDLEWARE
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

// PROFILE GET
router.get('/profile', authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// PROFILE UPDATE
router.put('/profile', authMiddleware, async (req, res) => {
  const { username, phone, email, profileImage } = req.body;
  const updated = await User.findByIdAndUpdate(
    req.userId,
    { username, phone, email, profileImage },
    { new: true }
  ).select('-password');

  res.json({ message: "Profile updated", user: updated });
});

export default router;
