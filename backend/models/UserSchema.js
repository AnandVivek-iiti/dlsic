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
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    maxlength: [12, 'Password must be at most 12 characters long']
  },

  role: {
    type: String,
    enum: ['student', 'teacher', 'alumni'],
    default: 'student',
  },

  profileImage: String,
  imageBase64: String,

  // Student fields
  class: String,
  stream: String,

  // Teacher fields
  department: String,
  education: String,
  experience: String,

  // Alumni fields
  passingYear: String,
  currentCompany: String,
  skills: String

}, { timestamps: true });

// ✅ Custom Role-based Validation
userSchema.pre("validate", function (next) {
  const errors = [];

  if (this.role === "student") {
    if (!this.class) errors.push("Class is required for students");
    if (!this.stream) errors.push("Stream is required for students");
  }

  if (this.role === "teacher") {
    if (!this.department) errors.push("Department is required for teachers");
    if (!this.education) errors.push("Education is required for teachers");
    if (!this.experience) errors.push("Experience is required for teachers");
  }

  if (this.role === "alumni") {
    if (!this.passingYear || !/^\d{4}$/.test(this.passingYear)) {
      errors.push("Valid Passing Year is required for alumni");
    }
    if (!this.currentCompany) {
      errors.push("Current Company is required for alumni");
    }
    if (!this.skills) {
      errors.push("Skills are required for alumni");
    }
  }

  if (errors.length > 0) {
    const err = new mongoose.Error.ValidationError(this);
    errors.forEach((msg, i) => {
      err.addError(`field${i}`, new mongoose.Error.ValidatorError({ message: msg }));
    });
    return next(err);
  }

  next();
});

export const User = mongoose.model("User", userSchema);
