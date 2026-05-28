// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmQbAgoa60pbPA_EmW5WOdmPDhHBLi6K0",
  authDomain: "cr-strategic.firebaseapp.com",
  projectId: "cr-strategic",
  storageBucket: "cr-strategic.firebasestorage.app",
  messagingSenderId: "885025805438",
  appId: "1:885025805438:web:ee692439d3f8f8ce4db42f",
  measurementId: "G-HE1G9CCCT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
