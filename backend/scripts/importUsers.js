// const data = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));
// scripts/importUsers.js
import mongoose from 'mongoose';
import fs from 'fs';
import {User} from '../models/UserSchema.js';
mongoose.connect( 'mongodb://127.0.0.1:27017/todo') //process.env.MONGO_URI
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))
.then(async () => {
  const data = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));
  await User.insertMany(data);
  console.log("Users imported");
  process.exit();
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
