import express from "express";
import CounsellingModel from "../../models/couenselling.js";

const router = express.Router();
router.post('/counselling', async (req, res) => {
  try {
    const { name, class: studentClass, reason } = req.body;
    await CounsellingModel.create({ name, class: studentClass, reason, createdAt: new Date() });
    res.status(200).json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save" });
  }

});
export default router;