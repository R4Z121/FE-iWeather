// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvzXZlPU26YZWj0VjTbJzUmIQK15wtT1w",
    authDomain: "be-iweather.firebaseapp.com",
    projectId: "be-iweather",
    storageBucket: "be-iweather.appspot.com",
    messagingSenderId: "323631957402",
    appId: "1:323631957402:web:59357e3e1f8aa54d84a623"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);