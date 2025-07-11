import express from 'express';
import { verifyToken } from '../data/middlewares/authMiddleware.js';
import { User } from '../models/UserSchema.js';

const router = express.Router();
router.get('/', verifyToken, async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId).select('-password'); // exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
  username: user.username,
  email: user.email,
  phone: user.phone,
  profileImage: user.profileImage || '',
});

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
