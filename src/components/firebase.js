// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtJkfRZ_dz4yirMF7kFZfACXkt5NfePUU",
  authDomain: "login-auth-d0f7e.firebaseapp.com",
  projectId: "login-auth-d0f7e",
  storageBucket: "login-auth-d0f7e.appspot.com",
  messagingSenderId: "432924749483",
  appId: "1:432924749483:web:1aa4e466cf70cab21591ee",
  measurementId: "G-F76QE4E6XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore(app);
export default app;