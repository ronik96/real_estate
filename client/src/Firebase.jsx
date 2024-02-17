// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAO2LpjYodPPr1N4mqWqqKK6ha0SpBZVbQ",
    authDomain: "ronik-s.firebaseapp.com",
    databaseURL: "https://ronik-s-default-rtdb.firebaseio.com",
    projectId: "ronik-s",
    storageBucket: "ronik-s.appspot.com",
    messagingSenderId: "1039335254905",
    appId: "1:1039335254905:web:e5cdd642c9729bf7dd9da8",
    measurementId: "G-Q78G9DNQWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;