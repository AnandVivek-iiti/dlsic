import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be at least 5 characters long'],
    maxlength: [20, 'Name must be at most 20 characters long']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(v);
      },
      message: props => `${props.value} is not a valid Gmail address!`
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);  // Exactly 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    }
  },
  password: {
    type: String,
    required: true,
    // minlength: [6, 'Password must be at least 6 characters long'],
    // maxlength: [12, 'Password must be at most 12 characters long']
  },
  profilePhoto: {
    type: String,  // We'll store the Base64 string or image URL
    required: false
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
