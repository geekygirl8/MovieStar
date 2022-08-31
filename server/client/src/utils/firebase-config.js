
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVII8EDcZ1sh1yY3WLkvlyRJ9WdH8CCBE",
  authDomain: "react-movieflix.firebaseapp.com",
  projectId: "react-movieflix",
  storageBucket: "react-movieflix.appspot.com",
  messagingSenderId: "1075485059960",
  appId: "1:1075485059960:web:6c77ef6c530d59708db68d",
  measurementId: "G-8FYQDFNBW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);