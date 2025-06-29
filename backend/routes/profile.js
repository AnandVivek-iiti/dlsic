import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/profile', verifyToken, (req, res) => {
  // Use req.user here to get the user info
  res.json({
    username: "JohnDoe",
    email: "john@example.com",
    phone: "9876543210",
    profileImage: null,
  });
});

router.put('/profile', verifyToken, (req, res) => {
  // Update logic here
  res.json({ message: "Profile updated successfully" });
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // you can now use req.user.userId
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token invalid" });
  }
};

export default router;
