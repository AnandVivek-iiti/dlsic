import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be at least 5 characters'],
    maxlength: [20, 'Name must be at most 20 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w.-]+@gmail\.com$/, 'Email must be a valid @gmail.com address']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters'],
    maxlength: [12, 'Password must be at most 12 characters']
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
