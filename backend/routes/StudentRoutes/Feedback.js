// routes/feedback.js
import express from "express";
import FeedbackModel from "../../models/feedback.js";

const router = express.Router();

router.post("/feedback", async (req, res) => {
  try {
    const { name, class: studentClass, subject, description, feedbackType, isAnonymous } = req.body;

    await FeedbackModel.create({
      name: isAnonymous ? undefined : name,
      class: isAnonymous ? undefined : studentClass,
      subject,
      description,
      feedbackType,
      isAnonymous,
      createdAt: new Date(),
    });

    res.status(200).json({ message: "Feedback saved" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Submission failed" });
  }
});

export default router;
