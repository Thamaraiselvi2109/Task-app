// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnK1tkG7m9F9lE0GBWNTMisnW9u-72z9g",
  authDomain: "todo-management-app-94302.firebaseapp.com",
  projectId: "todo-management-app-94302",
  storageBucket: "todo-management-app-94302.firebasestorage.app",
  messagingSenderId: "517334135687",
  appId: "1:517334135687:web:e986411123650b4ffc9922",
  measurementId: "G-5KVY4HR34Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
