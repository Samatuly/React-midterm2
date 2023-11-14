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
  apiKey: "AIzaSyCSyUFqXhuB10hI9Wt6z3ZL_RBcq_LJch8",
  authDomain: "unibuddy-ac4e1.firebaseapp.com",
  databaseURL: "https://unibuddy-ac4e1-default-rtdb.firebaseio.com",
  projectId: "unibuddy-ac4e1",
  storageBucket: "unibuddy-ac4e1.appspot.com",
  messagingSenderId: "396355623147",
  appId: "1:396355623147:web:d3d34a9379c78e554586ae",
  measurementId: "G-KXGVHYN137"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const db = getDatabase(app);