// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk6ZrdmAGCGft61-5Dztu3wKSMDdVXk-8",
  authDomain: "car-service-e95f7.firebaseapp.com",
  projectId: "car-service-e95f7",
  storageBucket: "car-service-e95f7.appspot.com",
  messagingSenderId: "184547111826",
  appId: "1:184547111826:web:4243925a2da385235ac74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;