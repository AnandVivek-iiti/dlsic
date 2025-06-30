import mongoose from 'mongoose';
const doubtSchema = new mongoose.Schema({
  userName: String,
  category: String,
  question: String,
  answer: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Doubt', doubtSchema);
