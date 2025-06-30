import express from 'express';
import Doubt from '../models/Doubts.js';
const router = express.Router();

// List unanswered doubts
router.get('/unanswered', async (req, res) => {
  const doubts = await Doubt.find({ answer: { $exists: false } });
  res.json(doubts);
});

// Post an answer
router.post('/answer/:id', async (req, res) => {
  const { answer } = req.body;
  await Doubt.findByIdAndUpdate(req.params.id, { answer });
  res.json({ success: true });
});

export default router;
