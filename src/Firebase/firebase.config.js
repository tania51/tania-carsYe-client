// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh6jDmVSb6gIrceFOqCnkW7u0YYNPwJ4s",
  authDomain: "cars-ye.firebaseapp.com",
  projectId: "cars-ye",
  storageBucket: "cars-ye.appspot.com",
  messagingSenderId: "116293988146",
  appId: "1:116293988146:web:4bcfd5aef3f83f8083b12b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
