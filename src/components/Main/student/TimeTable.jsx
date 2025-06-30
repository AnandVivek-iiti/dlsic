import { useState } from 'react';

const timetableData = {
6: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Rani', color: 'bg-blue-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Mr. Tiwari', color: 'bg-purple-100' },
      Wednesday: { subject: '🌿 Science', teacher: 'Ms. Nidhi', color: 'bg-green-100' },
      Thursday: { subject: '🌍 Social Science', teacher: 'Mr. Rajiv', color: 'bg-yellow-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Mr. Awasthi', color: 'bg-pink-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📐 Math', teacher: 'Mr. Tiwari', color: 'bg-purple-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Rani', color: 'bg-blue-100' },
      Wednesday: { subject: '🌍 Social Science', teacher: 'Mr. Rajiv', color: 'bg-yellow-100' },
      Thursday: { subject: '🧮 Hindi', teacher: 'Mr. Awasthi', color: 'bg-pink-100' },
      Friday: { subject: '🌿 Science', teacher: 'Ms. Nidhi', color: 'bg-green-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Arvind', color: 'bg-gray-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '🌍 Social Science', teacher: 'Mr. Rajiv', color: 'bg-yellow-100' },
      Tuesday: { subject: '🌿 Science', teacher: 'Ms. Nidhi', color: 'bg-green-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Rani', color: 'bg-blue-100' },
      Thursday: { subject: '📐 Math', teacher: 'Mr. Tiwari', color: 'bg-purple-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Mr. Awasthi', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Sharma', color: 'bg-indigo-100' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '🧮 Hindi', teacher: 'Mr. Awasthi', color: 'bg-pink-100' },
      Tuesday: { subject: '🌍 Social Science', teacher: 'Mr. Rajiv', color: 'bg-yellow-100' },
      Wednesday: { subject: '🌿 Science', teacher: 'Ms. Nidhi', color: 'bg-green-100' },
      Thursday: { subject: '📘 English', teacher: 'Ms. Rani', color: 'bg-blue-100' },
      Friday: { subject: '📐 Math', teacher: 'Mr. Tiwari', color: 'bg-purple-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Vinay', color: 'bg-teal-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '🌿 Science', teacher: 'Ms. Nidhi', color: 'bg-green-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Mr. Tiwari', color: 'bg-purple-100' },
      Wednesday: { subject: '🧮 Hindi', teacher: 'Mr. Awasthi', color: 'bg-pink-100' },
      Thursday: { subject: '🌍 Social Science', teacher: 'Mr. Rajiv', color: 'bg-yellow-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Rani', color: 'bg-blue-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '🌍 Social Science', teacher: 'Mr. Rajiv', color: 'bg-yellow-100' },
      Tuesday: { subject: '🧮 Hindi', teacher: 'Mr. Awasthi', color: 'bg-pink-100' },
      Wednesday: { subject: '📐 Math', teacher: 'Mr. Tiwari', color: 'bg-purple-100' },
      Thursday: { subject: '🌿 Science', teacher: 'Ms. Nidhi', color: 'bg-green-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Rani', color: 'bg-blue-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Arvind', color: 'bg-gray-100' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Sharma', color: 'bg-indigo-100' },
      Tuesday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
      Wednesday: { subject: '💻 Computer', teacher: 'Mr. Arvind', color: 'bg-gray-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Sharma', color: 'bg-indigo-100' },
      Friday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Vinay', color: 'bg-teal-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Vinay', color: 'bg-teal-100' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Sharma', color: 'bg-indigo-100' },
      Wednesday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
      Thursday: { subject: '💻 Computer', teacher: 'Mr. Arvind', color: 'bg-gray-100' },
      Friday: { subject: '🏃 Games', teacher: 'Coach Vinay', color: 'bg-teal-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Sharma', color: 'bg-indigo-100' },
    },
  },
],

  7: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Mr. Saxena', color: 'bg-blue-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Ms. Meena', color: 'bg-purple-100' },
      Wednesday: { subject: '🌿 Science', teacher: 'Mr. Deepak', color: 'bg-green-100' },
      Thursday: { subject: '🌍 History', teacher: 'Ms. Priya', color: 'bg-yellow-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Mr. Tripathi', color: 'bg-pink-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Poonam', color: 'bg-red-100' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📐 Math', teacher: 'Ms. Meena', color: 'bg-purple-100' },
      Tuesday: { subject: '📘 English', teacher: 'Mr. Saxena', color: 'bg-blue-100' },
      Wednesday: { subject: '🌍 Geography', teacher: 'Mr. Sameer', color: 'bg-orange-100' },
      Thursday: { subject: '🧮 Hindi', teacher: 'Mr. Tripathi', color: 'bg-pink-100' },
      Friday: { subject: '🌿 Science', teacher: 'Mr. Deepak', color: 'bg-green-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Ajay', color: 'bg-gray-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '🌍 Geography', teacher: 'Mr. Sameer', color: 'bg-orange-100' },
      Tuesday: { subject: '🌿 Science', teacher: 'Mr. Deepak', color: 'bg-green-100' },
      Wednesday: { subject: '📘 English', teacher: 'Mr. Saxena', color: 'bg-blue-100' },
      Thursday: { subject: '📐 Math', teacher: 'Ms. Meena', color: 'bg-purple-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Mr. Tripathi', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Ms. Kavita', color: 'bg-indigo-100' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '🧮 Hindi', teacher: 'Mr. Tripathi', color: 'bg-pink-100' },
      Tuesday: { subject: '🌍 History', teacher: 'Ms. Priya', color: 'bg-yellow-100' },
      Wednesday: { subject: '🌿 Science', teacher: 'Mr. Deepak', color: 'bg-green-100' },
      Thursday: { subject: '📘 English', teacher: 'Mr. Saxena', color: 'bg-blue-100' },
      Friday: { subject: '📐 Math', teacher: 'Ms. Meena', color: 'bg-purple-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Alok', color: 'bg-teal-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '🌿 Science', teacher: 'Mr. Deepak', color: 'bg-green-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Ms. Meena', color: 'bg-purple-100' },
      Wednesday: { subject: '🧮 Hindi', teacher: 'Mr. Tripathi', color: 'bg-pink-100' },
      Thursday: { subject: '🌍 History', teacher: 'Ms. Priya', color: 'bg-yellow-100' },
      Friday: { subject: '📘 English', teacher: 'Mr. Saxena', color: 'bg-blue-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Poonam', color: 'bg-red-100' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '🌍 Geography', teacher: 'Mr. Sameer', color: 'bg-orange-100' },
      Tuesday: { subject: '🧮 Hindi', teacher: 'Mr. Tripathi', color: 'bg-pink-100' },
      Wednesday: { subject: '📐 Math', teacher: 'Ms. Meena', color: 'bg-purple-100' },
      Thursday: { subject: '🌿 Science', teacher: 'Mr. Deepak', color: 'bg-green-100' },
      Friday: { subject: '📘 English', teacher: 'Mr. Saxena', color: 'bg-blue-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Ajay', color: 'bg-gray-100' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Ms. Kavita', color: 'bg-indigo-100' },
      Tuesday: { subject: '🎨 Art', teacher: 'Ms. Poonam', color: 'bg-red-100' },
      Wednesday: { subject: '💻 Computer', teacher: 'Mr. Ajay', color: 'bg-gray-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Ms. Kavita', color: 'bg-indigo-100' },
      Friday: { subject: '🎨 Art', teacher: 'Ms. Poonam', color: 'bg-red-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Alok', color: 'bg-teal-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Alok', color: 'bg-teal-100' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Ms. Kavita', color: 'bg-indigo-100' },
      Wednesday: { subject: '🎨 Art', teacher: 'Ms. Poonam', color: 'bg-red-100' },
      Thursday: { subject: '💻 Computer', teacher: 'Mr. Ajay', color: 'bg-gray-100' },
      Friday: { subject: '🏃 Games', teacher: 'Coach Alok', color: 'bg-teal-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Ms. Kavita', color: 'bg-indigo-100' },
    },
  },
],

  8: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Anita', color: 'bg-blue-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Mr. Dinesh', color: 'bg-purple-100' },
      Wednesday: { subject: '🌿 Science', teacher: 'Ms. Rupa', color: 'bg-green-100' },
      Thursday: { subject: '🌍 History', teacher: 'Mr. Bhanu', color: 'bg-yellow-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Ms. Vimla', color: 'bg-pink-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📐 Math', teacher: 'Mr. Dinesh', color: 'bg-purple-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Anita', color: 'bg-blue-100' },
      Wednesday: { subject: '🌍 Civics', teacher: 'Ms. Tanvi', color: 'bg-orange-100' },
      Thursday: { subject: '🧮 Hindi', teacher: 'Ms. Vimla', color: 'bg-pink-100' },
      Friday: { subject: '🌿 Science', teacher: 'Ms. Rupa', color: 'bg-green-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Rakesh', color: 'bg-gray-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '🌍 Civics', teacher: 'Ms. Tanvi', color: 'bg-orange-100' },
      Tuesday: { subject: '🌿 Science', teacher: 'Ms. Rupa', color: 'bg-green-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Anita', color: 'bg-blue-100' },
      Thursday: { subject: '📐 Math', teacher: 'Mr. Dinesh', color: 'bg-purple-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Ms. Vimla', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Kuldeep', color: 'bg-indigo-100' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '🧮 Hindi', teacher: 'Ms. Vimla', color: 'bg-pink-100' },
      Tuesday: { subject: '🌍 History', teacher: 'Mr. Bhanu', color: 'bg-yellow-100' },
      Wednesday: { subject: '🌿 Science', teacher: 'Ms. Rupa', color: 'bg-green-100' },
      Thursday: { subject: '📘 English', teacher: 'Ms. Anita', color: 'bg-blue-100' },
      Friday: { subject: '📐 Math', teacher: 'Mr. Dinesh', color: 'bg-purple-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Neeraj', color: 'bg-teal-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '🌿 Science', teacher: 'Ms. Rupa', color: 'bg-green-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Mr. Dinesh', color: 'bg-purple-100' },
      Wednesday: { subject: '🧮 Hindi', teacher: 'Ms. Vimla', color: 'bg-pink-100' },
      Thursday: { subject: '🌍 History', teacher: 'Mr. Bhanu', color: 'bg-yellow-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Anita', color: 'bg-blue-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '🌍 Civics', teacher: 'Ms. Tanvi', color: 'bg-orange-100' },
      Tuesday: { subject: '🧮 Hindi', teacher: 'Ms. Vimla', color: 'bg-pink-100' },
      Wednesday: { subject: '📐 Math', teacher: 'Mr. Dinesh', color: 'bg-purple-100' },
      Thursday: { subject: '🌿 Science', teacher: 'Ms. Rupa', color: 'bg-green-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Anita', color: 'bg-blue-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Rakesh', color: 'bg-gray-100' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Kuldeep', color: 'bg-indigo-100' },
      Tuesday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
      Wednesday: { subject: '💻 Computer', teacher: 'Mr. Rakesh', color: 'bg-gray-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Kuldeep', color: 'bg-indigo-100' },
      Friday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Neeraj', color: 'bg-teal-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Neeraj', color: 'bg-teal-100' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Kuldeep', color: 'bg-indigo-100' },
      Wednesday: { subject: '🎨 Art', teacher: 'Ms. Shalini', color: 'bg-red-100' },
      Thursday: { subject: '💻 Computer', teacher: 'Mr. Rakesh', color: 'bg-gray-100' },
      Friday: { subject: '🏃 Games', teacher: 'Coach Neeraj', color: 'bg-teal-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Kuldeep', color: 'bg-indigo-100' },
    },
  },
],

  9: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Mr. Joshi', color: 'bg-blue-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Ms. Neha', color: 'bg-purple-100' },
      Wednesday: { subject: '🌿 Science (Physics)', teacher: 'Mr. Vivek', color: 'bg-green-100' },
      Thursday: { subject: '🌍 History', teacher: 'Ms. Rachna', color: 'bg-yellow-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Ms. Reena', color: 'bg-pink-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Mr. Rafiq', color: 'bg-red-100' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📐 Math', teacher: 'Ms. Neha', color: 'bg-purple-100' },
      Tuesday: { subject: '📘 English', teacher: 'Mr. Joshi', color: 'bg-blue-100' },
      Wednesday: { subject: '🌍 Geography', teacher: 'Mr. Arjun', color: 'bg-orange-100' },
      Thursday: { subject: '🧮 Hindi', teacher: 'Ms. Reena', color: 'bg-pink-100' },
      Friday: { subject: '🌿 Science (Chemistry)', teacher: 'Mr. Vivek', color: 'bg-green-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Sameer', color: 'bg-gray-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '🌍 Civics', teacher: 'Mr. Arjun', color: 'bg-orange-100' },
      Tuesday: { subject: '🌿 Science (Biology)', teacher: 'Ms. Komal', color: 'bg-emerald-100' },
      Wednesday: { subject: '📘 English', teacher: 'Mr. Joshi', color: 'bg-blue-100' },
      Thursday: { subject: '📐 Math', teacher: 'Ms. Neha', color: 'bg-purple-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Ms. Reena', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Harsh', color: 'bg-indigo-100' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '🧮 Hindi', teacher: 'Ms. Reena', color: 'bg-pink-100' },
      Tuesday: { subject: '🌍 History', teacher: 'Ms. Rachna', color: 'bg-yellow-100' },
      Wednesday: { subject: '🌿 Science (Physics)', teacher: 'Mr. Vivek', color: 'bg-green-100' },
      Thursday: { subject: '📘 English', teacher: 'Mr. Joshi', color: 'bg-blue-100' },
      Friday: { subject: '📐 Math', teacher: 'Ms. Neha', color: 'bg-purple-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Aman', color: 'bg-teal-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '🌿 Science (Chemistry)', teacher: 'Mr. Vivek', color: 'bg-green-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Ms. Neha', color: 'bg-purple-100' },
      Wednesday: { subject: '🧮 Hindi', teacher: 'Ms. Reena', color: 'bg-pink-100' },
      Thursday: { subject: '🌍 Geography', teacher: 'Mr. Arjun', color: 'bg-orange-100' },
      Friday: { subject: '📘 English', teacher: 'Mr. Joshi', color: 'bg-blue-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Mr. Rafiq', color: 'bg-red-100' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '🌍 Geography', teacher: 'Mr. Arjun', color: 'bg-orange-100' },
      Tuesday: { subject: '🧮 Hindi', teacher: 'Ms. Reena', color: 'bg-pink-100' },
      Wednesday: { subject: '📐 Math', teacher: 'Ms. Neha', color: 'bg-purple-100' },
      Thursday: { subject: '🌿 Science (Biology)', teacher: 'Ms. Komal', color: 'bg-emerald-100' },
      Friday: { subject: '📘 English', teacher: 'Mr. Joshi', color: 'bg-blue-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Mr. Sameer', color: 'bg-gray-100' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Harsh', color: 'bg-indigo-100' },
      Tuesday: { subject: '🎨 Art', teacher: 'Mr. Rafiq', color: 'bg-red-100' },
      Wednesday: { subject: '💻 Computer', teacher: 'Mr. Sameer', color: 'bg-gray-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Harsh', color: 'bg-indigo-100' },
      Friday: { subject: '🎨 Art', teacher: 'Mr. Rafiq', color: 'bg-red-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Aman', color: 'bg-teal-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Aman', color: 'bg-teal-100' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Harsh', color: 'bg-indigo-100' },
      Wednesday: { subject: '🎨 Art', teacher: 'Mr. Rafiq', color: 'bg-red-100' },
      Thursday: { subject: '💻 Computer', teacher: 'Mr. Sameer', color: 'bg-gray-100' },
      Friday: { subject: '🏃 Games', teacher: 'Coach Aman', color: 'bg-teal-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Harsh', color: 'bg-indigo-100' },
    },
  },
],

  10: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Pooja', color: 'bg-blue-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Mr. Sharma', color: 'bg-purple-100' },
      Wednesday: { subject: '🧪 Science (Physics)', teacher: 'Mr. Vikas', color: 'bg-green-100' },
      Thursday: { subject: '🌍 History', teacher: 'Ms. Vandana', color: 'bg-yellow-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Mr. Suresh', color: 'bg-pink-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Ritu', color: 'bg-red-100' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📐 Math', teacher: 'Mr. Sharma', color: 'bg-purple-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Pooja', color: 'bg-blue-100' },
      Wednesday: { subject: '🌍 Civics', teacher: 'Mr. Manish', color: 'bg-orange-100' },
      Thursday: { subject: '🧮 Hindi', teacher: 'Mr. Suresh', color: 'bg-pink-100' },
      Friday: { subject: '🧪 Science (Chemistry)', teacher: 'Mr. Vikas', color: 'bg-green-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Ms. Tanya', color: 'bg-gray-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '🌍 Geography', teacher: 'Mr. Manish', color: 'bg-orange-100' },
      Tuesday: { subject: '🧪 Science (Biology)', teacher: 'Ms. Anjali', color: 'bg-emerald-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Pooja', color: 'bg-blue-100' },
      Thursday: { subject: '📐 Math', teacher: 'Mr. Sharma', color: 'bg-purple-100' },
      Friday: { subject: '🧮 Hindi', teacher: 'Mr. Suresh', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Ravi', color: 'bg-indigo-100' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '🧮 Hindi', teacher: 'Mr. Suresh', color: 'bg-pink-100' },
      Tuesday: { subject: '🌍 History', teacher: 'Ms. Vandana', color: 'bg-yellow-100' },
      Wednesday: { subject: '🧪 Science (Physics)', teacher: 'Mr. Vikas', color: 'bg-green-100' },
      Thursday: { subject: '📘 English', teacher: 'Ms. Pooja', color: 'bg-blue-100' },
      Friday: { subject: '📐 Math', teacher: 'Mr. Sharma', color: 'bg-purple-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raghav', color: 'bg-teal-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '🧪 Science (Chemistry)', teacher: 'Mr. Vikas', color: 'bg-green-100' },
      Tuesday: { subject: '📐 Math', teacher: 'Mr. Sharma', color: 'bg-purple-100' },
      Wednesday: { subject: '🧮 Hindi', teacher: 'Mr. Suresh', color: 'bg-pink-100' },
      Thursday: { subject: '🌍 Geography', teacher: 'Mr. Manish', color: 'bg-orange-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Pooja', color: 'bg-blue-100' },
      Saturday: { subject: '🎨 Art', teacher: 'Ms. Ritu', color: 'bg-red-100' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '🌍 Civics', teacher: 'Mr. Manish', color: 'bg-orange-100' },
      Tuesday: { subject: '🧮 Hindi', teacher: 'Mr. Suresh', color: 'bg-pink-100' },
      Wednesday: { subject: '📐 Math', teacher: 'Mr. Sharma', color: 'bg-purple-100' },
      Thursday: { subject: '🧪 Science (Biology)', teacher: 'Ms. Anjali', color: 'bg-emerald-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Pooja', color: 'bg-blue-100' },
      Saturday: { subject: '💻 Computer', teacher: 'Ms. Tanya', color: 'bg-gray-100' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Ravi', color: 'bg-indigo-100' },
      Tuesday: { subject: '🎨 Art', teacher: 'Ms. Ritu', color: 'bg-red-100' },
      Wednesday: { subject: '💻 Computer', teacher: 'Ms. Tanya', color: 'bg-gray-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Ravi', color: 'bg-indigo-100' },
      Friday: { subject: '🎨 Art', teacher: 'Ms. Ritu', color: 'bg-red-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raghav', color: 'bg-teal-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Raghav', color: 'bg-teal-100' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Ravi', color: 'bg-indigo-100' },
      Wednesday: { subject: '🎨 Art', teacher: 'Ms. Ritu', color: 'bg-red-100' },
      Thursday: { subject: '💻 Computer', teacher: 'Ms. Tanya', color: 'bg-gray-100' },
      Friday: { subject: '🏃 Games', teacher: 'Coach Raghav', color: 'bg-teal-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Ravi', color: 'bg-indigo-100' },
    },
  },
],

  11: {
  science: [
    {
      period: 1,
      time: '8:00 – 8:45 AM',
      days: {
        Monday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Wednesday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Thursday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Friday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      },
    },
    {
      period: 2,
      time: '8:50 – 9:35 AM',
      days: {
        Monday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Tuesday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Wednesday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Friday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      },
    },
    {
      period: 3,
      time: '9:40 – 10:25 AM',
      days: {
        Monday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Tuesday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Wednesday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Friday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      },
    },
    {
      period: 4,
      time: '10:30 – 11:15 AM',
      days: {
        Monday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Wednesday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Thursday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Friday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      },
    },
    {
      period: 5,
      time: '11:20 – 12:05 PM',
      days: {
        Monday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Tuesday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Wednesday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Thursday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Friday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      },
    },
    {
      period: 6,
      time: '12:10 – 12:55 PM',
      days: {
        Monday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Tuesday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Wednesday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Thursday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Friday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
        Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      },
    },
    {
      period: 7,
      time: '1:00 – 1:45 PM',
      days: {
        Monday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
        Tuesday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
        Wednesday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
        Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Friday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      },
    },
    {
      period: 8,
      time: '1:50 – 2:35 PM',
      days: {
        Monday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
        Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
        Wednesday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
        Thursday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Friday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Saturday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      },
    },
  ],
  commerce: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Thursday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Friday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Tuesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Friday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Wednesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Thursday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Friday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Tuesday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Wednesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Tuesday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Friday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Tuesday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      Wednesday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Friday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Wednesday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Thursday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Friday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Saturday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
    },
  },
],

  arts: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Thursday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Friday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Tuesday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Tuesday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Wednesday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Thursday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Friday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Tuesday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Wednesday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Thursday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Friday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Saturday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Saturday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
    },
  },
],
},

12: {
  science: [
    {
      period: 1,
      time: '8:00 – 8:45 AM',
      days: {
        Monday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Wednesday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Thursday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Friday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      },
    },
    {
      period: 2,
      time: '8:50 – 9:35 AM',
      days: {
        Monday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Tuesday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Wednesday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Friday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      },
    },
    {
      period: 3,
      time: '9:40 – 10:25 AM',
      days: {
        Monday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Tuesday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Wednesday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Friday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      },
    },
    {
      period: 4,
      time: '10:30 – 11:15 AM',
      days: {
        Monday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Wednesday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Thursday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Friday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      },
    },
    {
      period: 5,
      time: '11:20 – 12:05 PM',
      days: {
        Monday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Tuesday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Wednesday: { subject: '🧪 Physics', teacher: 'Mr. A. Sinha', color: 'bg-green-100' },
        Thursday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Friday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      },
    },
    {
      period: 6,
      time: '12:10 – 12:55 PM',
      days: {
        Monday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Tuesday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Wednesday: { subject: '📐 Math', teacher: 'Mr. D. Mehra', color: 'bg-purple-100' },
        Thursday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Friday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
        Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      },
    },
    {
      period: 7,
      time: '1:00 – 1:45 PM',
      days: {
        Monday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
        Tuesday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
        Wednesday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
        Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
        Friday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
        Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      },
    },
    {
      period: 8,
      time: '1:50 – 2:35 PM',
      days: {
        Monday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
        Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
        Wednesday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
        Thursday: { subject: '🧪 Chemistry', teacher: 'Ms. Shweta', color: 'bg-green-200' },
        Friday: { subject: '🧪 Biology', teacher: 'Ms. Meena', color: 'bg-emerald-100' },
        Saturday: { subject: '💻 Computer Science', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      },
    },
  ],
  commerce: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Thursday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Friday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Wednesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      Saturday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Thursday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Friday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Tuesday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Wednesday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Friday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Tuesday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Wednesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Thursday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Friday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Saturday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Friday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
      Wednesday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '📊 Business Studies', teacher: 'Ms. Kavita', color: 'bg-blue-100' },
      Saturday: { subject: '🎨 Drawing', teacher: 'Ms. Ritu', color: 'bg-pink-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Wednesday: { subject: '📊 Accountancy', teacher: 'Mr. R. Tiwari', color: 'bg-blue-200' },
      Thursday: { subject: '📚 Economics', teacher: 'Ms. Ruchi', color: 'bg-teal-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Saturday: { subject: '💻 Computer Applications', teacher: 'Mr. Naresh', color: 'bg-gray-100' },
    },
  },
],

arts: [
  {
    period: 1,
    time: '8:00 – 8:45 AM',
    days: {
      Monday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 2,
    time: '8:50 – 9:35 AM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
    },
  },
  {
    period: 3,
    time: '9:40 – 10:25 AM',
    days: {
      Monday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Tuesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Wednesday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Thursday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Friday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 4,
    time: '10:30 – 11:15 AM',
    days: {
      Monday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Tuesday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
    },
  },
  {
    period: 5,
    time: '11:20 – 12:05 PM',
    days: {
      Monday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Tuesday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Friday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Saturday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
    },
  },
  {
    period: 6,
    time: '12:10 – 12:55 PM',
    days: {
      Monday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Tuesday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Wednesday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Thursday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Friday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Saturday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
    },
  },
  {
    period: 7,
    time: '1:00 – 1:45 PM',
    days: {
      Monday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Tuesday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Wednesday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Thursday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
      Friday: { subject: '📚 Sociology', teacher: 'Mr. Ravi', color: 'bg-orange-100' },
      Saturday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
    },
  },
  {
    period: 8,
    time: '1:50 – 2:35 PM',
    days: {
      Monday: { subject: '🏃 Games', teacher: 'Coach Raj', color: 'bg-teal-200' },
      Tuesday: { subject: '📘 Moral Science', teacher: 'Mr. Suraj', color: 'bg-indigo-200' },
      Wednesday: { subject: '📖 Political Science', teacher: 'Mr. Tarun', color: 'bg-yellow-200' },
      Thursday: { subject: '🎨 Fine Arts', teacher: 'Ms. Lata', color: 'bg-pink-100' },
      Friday: { subject: '📘 English', teacher: 'Ms. Monica', color: 'bg-indigo-100' },
      Saturday: { subject: '📖 History', teacher: 'Mr. Dheeraj', color: 'bg-yellow-100' },
    },
  },
],

}

};
// export default TimeTable;

export default function TimeTable() {
  const [selectedClass, setSelectedClass] = useState(6);
  const [selectedStream, setSelectedStream] = useState('science');

  const classOptions = [6, 7, 8, 9, 10, 11, 12];
  const streamOptions = ['science', 'commerce', 'arts'];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentData = (() => {
    if (selectedClass >= 11) {
      return timetableData[selectedClass]?.[selectedStream] || [];
    }
    return timetableData[selectedClass] || [];
  })();

  return (
    <div className="overflow-x-auto animate-fade-up animate-duration-[1200ms] animate-ease-in-out p-4">
      {/* Class Selector */}
      <div className="flex flex-wrap justify-center mb-6 gap-4">
        {classOptions.map((cls) => (
          <button
            key={cls}
            onClick={() => {
              setSelectedClass(cls);
              if (cls < 11) setSelectedStream('science');
            }}
            className={`px-4 py-2 rounded-full shadow-md font-semibold transition-all duration-300 text-sm ${
              selectedClass === cls
                ? 'bg-indigo-600 text-white scale-105'
                : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-100'
            }`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      {/* Stream Selector for Class 11 & 12 */}
      {(selectedClass === 11 || selectedClass === 12) && (
        <div className="flex flex-wrap justify-center mb-6 gap-4">
          {streamOptions.map((stream) => (
            <button
              key={stream}
              onClick={() => setSelectedStream(stream)}
              className={`px-4 py-2 rounded-full shadow-md font-semibold transition-all duration-300 text-sm capitalize ${
                selectedStream === stream
                  ? 'bg-pink-600 text-white scale-105'
                  : 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-100'
              }`}
            >
              {stream} Stream
            </button>
          ))}
        </div>
      )}

      {/* Timetable Table */}
      <table className="min-w-full text-sm text-left border border-gray-300 rounded-2xl shadow-2xl transform-gpu transition-transform duration-700 hover:scale-[1.02] hover:shadow-indigo-400/60">
        <thead>
          <tr className="bg-indigo-200 text-indigo-900">
            <th className="p-3 border border-gray-300 text-center">Period</th>
            <th className="p-3 border border-gray-300 text-center">Time</th>
            {daysOfWeek.map((day) => (
              <th key={day} className="p-3 border border-gray-300 text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, idx) => (
            <tr key={idx} className="hover:bg-indigo-50 transition-colors duration-300">
              <td className="p-3 border border-gray-300 font-bold text-center text-indigo-700">{row.period}</td>
              <td className="p-3 border border-gray-300 text-center text-sm text-gray-600">{row.time}</td>
              {daysOfWeek.map((day) => {
                const cell = row.days[day];
                return (
                  <td
                    key={day}
                    className={`p-3 border border-gray-300 text-center rounded-md transition-transform duration-300 shadow-md hover:scale-[1.05] ${
                      cell?.color || 'bg-white'
                    }`}
                  >
                    {cell ? (
                      <>
                        <div className="font-semibold text-indigo-800 text-base">{cell.subject}</div>
                        <div className="text-xs text-gray-600 italic mt-1">{cell.teacher}</div>
                      </>
                    ) : (
                      <div className="text-gray-400 italic">-</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
