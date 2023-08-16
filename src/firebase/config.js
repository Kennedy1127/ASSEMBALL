// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7a7BgWoDEkclE8fkplnBX7ougaNjtg8E",
  authDomain: "assemball-v2.firebaseapp.com",
  projectId: "assemball-v2",
  storageBucket: "assemball-v2.appspot.com",
  messagingSenderId: "878031578008",
  appId: "1:878031578008:web:aeddff336bc3bb0102c1ed",
  measurementId: "G-J3HZN54YNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const timestamp = serverTimestamp();

export { auth, db, timestamp };
