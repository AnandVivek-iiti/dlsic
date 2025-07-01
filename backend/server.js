import mongoose from 'mongoose';
import express from 'express';
// const axios = require("axios");
// const cors = require("cors");
import axios from "axios";
import cors from "cors";
// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();
import { User } from './models/UserSchema.js'; // or adjust path as needed
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import profileRoutes from './routes/profile.js';
const JWT_SECRET = process.env.JWT_SECRET;
import { verifyToken } from './middlewares/authMiddleware.js'; // Import the verifyToken middleware
// ⚠️ move to env var in production
import doubtRoutes from './routes/doubtRoutes.js';
import mentorRoutes from './routes/mentorRoutes.js';

const app = express();
// const port =" 0.0.0.0";
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000
app.use(cors(
  {
    origin: 'https://dlsic.vercel.app/', 
  }
));
app.use(express.json({ limit: '5mb' }));

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/todo')

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
 // Connect to MongoDB

app.use('/api/doubts', doubtRoutes);
app.use('/api/mentors', mentorRoutes);

app.use('/api/profile', profileRoutes);
// Signup route
app.post('/api/signup', async (req, res) => {
  const { username, email, phone, password, profileImage } = req.body;


  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already registered with this email' });
    }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds); // 🔐 Hashing here

        const newUser = new User({ username, email, phone, password: hashedPassword, profileImage }); // Store hashed password
        await newUser.save();
// ✅ Generate JWT Token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
console.log(token);
        res.status(201).json({ message: 'User registered successfully!', token });

    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({message : err.message });
        }
        res.status(500).json({ message: 'Something went wrong' });
      }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Compare the provided password with the hashed password in the database
        // bcrypt.compare returns a promise that resolves to true or false
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

const token = jwt.sign(
  { userId: user._id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '2h' }
);

res.json({ message: 'Login successful!', token });

    } catch (err) {
      console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
          
    }

});

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
  req.userId = decoded.userId;

    next();
  });
};
 app.use((req, res, next) => {
  console.log("🔍 Incoming request:", req.method, req.url);
  console.log("Headers:", req.headers);
  next();
});

// GET profile (protected)
app.get('/api/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT profile (protected)
app.put('/api/profile', verifyToken, async (req, res) => {
  try {
    const { username, email, phone, profileImage } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      { username, email, phone, profileImage },
      { new: true }
    ).select('-password');
    res.json({ message: "Profile updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
});
// doubt solver

app.post("/api/ask", async (req, res) => {
  const question = req.body.question;

  try {
    const result = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
   

    const answer = result.data.choices[0].message.content.trim();
    res.json({ answer });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "GPT API error" });
  }
});



app.get('/', (req, res) => {
  res.send('Backend is running!');
});


app.get('https://dlsic-avsr.onrender.com/api/ping', (req, res) => {
  res.json({ message: 'Backend is working fine!' });
});

   app.listen(PORT,  () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });

