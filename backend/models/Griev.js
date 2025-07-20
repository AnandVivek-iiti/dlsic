import mongoose from "mongoose";

const grievanceSchema = new mongoose.Schema({
  grievanceType: {
    type: String,
    required: true,
    enum: ["academic", "administrative", "harassment", "other"],
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  class: {
    type: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Grievance = mongoose.model("Grievance", grievanceSchema);
