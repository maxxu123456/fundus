// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgAcnWhLzLyjFIpv9dtd9gMMIaNumjmpw",
  authDomain: "fundus-bbba5.firebaseapp.com",
  projectId: "fundus-bbba5",
  storageBucket: "fundus-bbba5.appspot.com",
  messagingSenderId: "101016243752",
  appId: "1:101016243752:web:14abc3c011ccc334c16f1d",
  measurementId: "G-GE7L022MM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
