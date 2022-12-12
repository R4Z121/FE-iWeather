// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzjA4tGD7oYsp1nDbeOPVQKxEIW4qTwdw",
    authDomain: "iweather-370206.firebaseapp.com",
    projectId: "iweather-370206",
    storageBucket: "iweather-370206.appspot.com",
    messagingSenderId: "873075667163",
    appId: "1:873075667163:web:b272708ba8eb8e7bd11cfe",
    measurementId: "G-BCYLG3GSPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);