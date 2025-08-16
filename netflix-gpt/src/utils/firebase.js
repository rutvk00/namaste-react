// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNDGeZO4jikG2ThN6ffXfHYH0WPXufOFo",
  authDomain: "netflixgpt-8fb97.firebaseapp.com",
  projectId: "netflixgpt-8fb97",
  storageBucket: "netflixgpt-8fb97.firebasestorage.app",
  messagingSenderId: "105869100931",
  appId: "1:105869100931:web:c785e8d41fe1b3cb3358b6",
  measurementId: "G-EKM59T77HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();