import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js'; // ✅ correct path


const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  const userId = req.user.userId; // You get this from token payload

  // You can fetch real user from DB using userId if needed
  res.json({
    username: "Anand Vivek",
    email: "anand@iiti.ac.in",
    phone: "9876543210",
    profileImage: "",
  });
});

export default router;
