import e from 'cors';
import mongoose from 'mongoose';
const profileSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  profileImage: String,
  percentage: String,
  attendance: String,
  remarks: String,
  extraCurriculars: [String],
  subjects: [
    {
      name: String,
      marks: Number,
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
export const Profile = mongoose.model('Profile', profileSchema);