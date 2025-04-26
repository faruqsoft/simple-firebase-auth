// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-TjmHL9Q1SsDBImh-nOO2S6np6haV5Wc",
    authDomain: "simple-firebase-auth-20dec.firebaseapp.com",
    projectId: "simple-firebase-auth-20dec",
    storageBucket: "simple-firebase-auth-20dec.firebasestorage.app",
    messagingSenderId: "234313320000",
    appId: "1:234313320000:web:434dfe46b8af01249841a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);