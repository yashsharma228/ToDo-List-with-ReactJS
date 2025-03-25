// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBigySsSZTeuEvlcMfc-dwe55WJYKd3Re0",
  authDomain: "login-auth-94010.firebaseapp.com",
  projectId: "login-auth-94010",
  storageBucket: "login-auth-94010.firebasestorage.app",
  messagingSenderId: "798730688376",
  appId: "1:798730688376:web:e250cc70190c7f93aa1a8d",
  measurementId: "G-31JCR7C87M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};

