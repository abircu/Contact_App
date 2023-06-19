// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk45N_rcEXw4a400RwzGt5Bg4U9Fm-3uU",
  authDomain: "vite-contact-ee9ec.firebaseapp.com",
  projectId: "vite-contact-ee9ec",
  storageBucket: "vite-contact-ee9ec.appspot.com",
  messagingSenderId: "836176405372",
  appId: "1:836176405372:web:bc6a83583e9764c388baf9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
