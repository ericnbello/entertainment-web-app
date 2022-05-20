// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9GzLY5EVFNvLsxHfq0q-rWeGRywXBi1Y",
  authDomain: "streaming-web-app.firebaseapp.com",
  projectId: "streaming-web-app",
  storageBucket: "streaming-web-app.appspot.com",
  messagingSenderId: "877009414204",
  appId: "1:877009414204:web:f409327402bfaffbfb3b39",
  measurementId: "G-R9E3J9YNW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const email = ;
// const password = ;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });