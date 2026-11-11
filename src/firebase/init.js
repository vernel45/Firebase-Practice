// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-DnQ7gsOOln4Dwa_T5jQIVcbbM1R7X0k",
  authDomain: "fir-practice-cfae5.firebaseapp.com",
  projectId: "fir-practice-cfae5",
  storageBucket: "fir-practice-cfae5.firebasestorage.app",
  messagingSenderId: "564760293836",
  appId: "1:564760293836:web:81980dadf71048af86ad69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();