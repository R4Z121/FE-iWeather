// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByHxmEsaK1TTuy-rxbw1MFqkGnLhyHaI4",
    authDomain: "project-sig-e8a01.firebaseapp.com",
    projectId: "project-sig-e8a01",
    storageBucket: "project-sig-e8a01.appspot.com",
    messagingSenderId: "938685941854",
    appId: "1:938685941854:web:a24db7ecbca6440943cccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);