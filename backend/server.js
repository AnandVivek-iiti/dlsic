import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { User } from './models/UserSchema.js'; // or adjust path as needed
import bcrypt from 'bcrypt';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
 // Connect to MongoDB

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

        res.status(201).json({ message: 'User registered successfully!' });
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


        res.json({ message: 'Login successful!' });
    } catch (err) {
      console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
});
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is working fine!' });
});

   app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
