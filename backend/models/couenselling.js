// models/counselling.js
import mongoose from "mongoose";

const CounsellingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  reason: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CounsellingModel = mongoose.model("Counselling", CounsellingSchema);
export default CounsellingModel;
