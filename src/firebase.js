// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCodgmBR03IemBRnE2V1yI1ecr6wIvZ7cc",
  authDomain: "dlsicavr.firebaseapp.com",
  projectId: "dlsicavr",
  storageBucket: "dlsicavr.appspot.com", // ✅ corrected this!
  messagingSenderId: "79679172725",
  appId: "1:79679172725:web:59a6282f9c74ecd483483c",
  measurementId: "G-TRY4NJ4LD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
