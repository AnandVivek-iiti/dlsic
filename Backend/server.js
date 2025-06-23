// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';
import { User } from './models/userSchema.js';

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.resolve('server/uploads')));
const res = await axios.post('http://localhost:3000/api/upload', formData);

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'server/uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Connect MongoDB
async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB');

    // ----- Signup -----
    app.post('/api/signup', async (req, res) => {
      const { name, email, password } = req.body;

      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Signup failed' });
      }
    });

    // ----- Login -----
    app.post('/api/login', async (req, res) => {
      const { email, password } = req.body;

      try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        res.json({ message: 'Login successful!' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
      }
    });

    // ----- Upload Notes -----
    app.post('/api/upload', upload.single('pdf'), (req, res) => {
      const { title, subject } = req.body;
      const file = req.file;

      if (!file) return res.status(400).json({ message: 'No file uploaded' });

      const fileUrl = `http://localhost:${port}/uploads/${file.filename}`;
      const newEntry = {
        title,
        subject,
        url: fileUrl,
        uploadedAt: new Date().toISOString()
      };

      const notesPath = './server/notes.json';
      const notes = fs.existsSync(notesPath)
        ? JSON.parse(fs.readFileSync(notesPath))
        : [];

      notes.push(newEntry);
      fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2));

      res.json({ message: 'Note uploaded successfully!', data: newEntry });
    });

    // ----- Fetch Notes -----
    app.get('/api/notes', (req, res) => {
      const notesPath = './server/notes.json';
      const notes = fs.existsSync(notesPath)
        ? JSON.parse(fs.readFileSync(notesPath))
        : [];

      res.json(notes);
    });

    // ----- Start Server -----
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

main();
