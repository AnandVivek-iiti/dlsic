import express from "express";
import { verifyToken } from "./middlewares/authMiddleware.js";
import { checkRole } from "../utils/checkRoles.js";

const router = express.Router();

// 🔐 Only teachers can access this route
router.get("/teacher-only", verifyToken, checkRole(["teacher"]), (req, res) => {
  res.json({ message: "Welcome Teacher!" });
});

// 🔐 Only alumni can access this route
router.get("/alumni-resource", verifyToken, checkRole(["alumni"]), (req, res) => {
  res.json({ message: "Hello Alumni!" });
});


export default router;
