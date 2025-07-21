
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import profileRoutes from "./routes/profile.js";
import authRoutes from "./routes/authRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import uploadRoute from "./routes/Upload.js";
import uploadNotesRoutes from "./routes/uploadnotes.js";
import counselling  from "./routes/StudentRoutes/counselling.js"
import Feedback from "./routes/StudentRoutes/Feedback.js"
import grievances from './routes/StudentRoutes/grievances.js'
import { verifyToken } from "./routes/middlewares/authMiddleware.js";
import { checkRole } from "./utils/checkRoles.js";
import { Announce_ } from "./models/Admin/Announce.js";
import { event_ } from "./models/Admin/Event.js";
import { Admin_ } from "./models/Admin/Admins.js";
import Uploads from "./routes/Admin/Upload.js"
// import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();
const PORT = process.env.PORT ||5000;

// CORS setup
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

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo")
  .then(() => console.log("✅ MongoDB connected Succesfully !! " ))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api", roleRoutes);
app.use("/api/upload",Uploads);
app.use("/api/notes", uploadNotesRoutes);
app.use("/upload", express.static("upload"));
app.use("/api/counselling",counselling);
app.use("/api/feedback",Feedback);
app.use("/api/grievances",grievances);
// app.use("/api/notifications", notificationRoutes);


// Announcement routes
// This route is used to create a new announcement
app.post('/announce', async (req, res) => {
    console.log("Incoming body:", req.body);
    try {
        const { clubname, heading, info ,announcelogo} = req.body;

        // Create and save the new announcement
        const newAnnounce = new Announce_({
            clubname,
            heading,
            info,
            announcelogo
        });

        await newAnnounce.save();

        res.status(201).json({ message: 'Announcement created successfully!' });
    } catch (err) {
        console.error('Error creating announcement:', err);
        res.status(500).json({ message: 'Something went wrong while saving the announcement' });
    }
});

app.get('/notification', async (req, res) => {
    try {
        const Events = await Announce_.find();
        res.status(200).json(Events);
    } catch (err) {
        console.error('Error fetching Events:', err);
        res.status(500).json({ message: 'Failed to fetch Events' });
    }
});

// Event routes
// This route is used to create a new event
app.post('/Createevent', async (req, res) => {
    console.log("Incoming body:", req.body);
    try {
        const { EventName, EventDateAndTime, ConductedBy, EventInfo ,Eventlogo} = req.body;

        // Create and save the new event
        const newEvent = new event_({
            EventName,
            EventDateAndTime,
            ConductedBy,
            EventInfo,
            Eventlogo
        });

        await newEvent.save();

        res.status(201).json({ message: 'Event Creation successful!' });
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ message: 'Something went wrong while saving the event' });
    }
});

// This route is used to fetch all events
// It retrieves all events from the database and returns them as a JSON response
app.get('/Events', async (req, res) => {
    try {
        const Events = await event_.find();
        res.status(200).json(Events);
    } catch (err) {
        console.error('Error fetching Events:', err);
        res.status(500).json({ message: 'Failed to fetch Events' });
    }
});

app.post('/api/verifyadmin', async (req, res) => {
    const { email } = req.body;

    try {
        const admin = await Admin_.findOne({ email });
        // Check if the email exists in the Admin collection
        // If the email exists, it means the user is an admin
        if (admin) {
            res.status(200).json({ authorized: true });
        } else {
            res.status(401).json({ authorized: false, message: 'Unauthorized email' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


// Home route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// Health check
app.get("/api/ping", (req, res) => {
  res.json({ message: "✅ Backend is working fine!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌐 Server running on ${PORT}`);
});
