// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWqXpIrQYtS2qPCOuvGYA9UN2yVYKSWAY",
  authDomain: "telegram-39192.firebaseapp.com",
  projectId: "telegram-39192",
  storageBucket: "telegram-39192.appspot.com",
  messagingSenderId: "693537052988",
  appId: "1:693537052988:web:6dca359e2ef34579f6a639",
  measurementId: "G-N69G90R90M"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const db = getDatabase(app);