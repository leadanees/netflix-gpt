// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-YZKhrclBEi8xv5LUokmf8mi7HOxpWcI",
  authDomain: "netflixgpt-1b7a4.firebaseapp.com",
  projectId: "netflixgpt-1b7a4",
  storageBucket: "netflixgpt-1b7a4.appspot.com",
  messagingSenderId: "188960127197",
  appId: "1:188960127197:web:a8c842e581f59b3c7d0334",
  measurementId: "G-980VCTSW6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();