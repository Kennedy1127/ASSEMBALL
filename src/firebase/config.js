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
  apiKey: "AIzaSyAFV6m1-3c2mN9qt8EgEuH2Ih7jUUfCfvY",
  authDomain: "assemball-2a077.firebaseapp.com",
  projectId: "assemball-2a077",
  storageBucket: "assemball-2a077.appspot.com",
  messagingSenderId: "784772272107",
  appId: "1:784772272107:web:762b9b1bbdbc71c3eed3ae",
  measurementId: "G-2JMP15JNSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const timestamp = serverTimestamp();

export { auth, db, timestamp };
