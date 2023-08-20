// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo5AOd-xCOFjOZBaRgVwhGezTm4Ow450s",
    authDomain: "invitely-d9420.firebaseapp.com",
    databaseURL: "https://invitely-d9420-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "invitely-d9420",
    storageBucket: "invitely-d9420.appspot.com",
    messagingSenderId: "646681745567",
    appId: "1:646681745567:web:097070329b881386f46aaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);