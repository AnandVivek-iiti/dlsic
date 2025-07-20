import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false, // optional if anonymous
  },
  class: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  feedbackType: {
    type: String,
    enum: ["Suggestion", "Complaint", "Praise", "Other"], // or customize as needed
    required: true,
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);

export default FeedbackModel;
