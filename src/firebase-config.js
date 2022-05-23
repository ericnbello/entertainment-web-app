import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9GzLY5EVFNvLsxHfq0q-rWeGRywXBi1Y",
  authDomain: "streaming-web-app.firebaseapp.com",
  projectId: "streaming-web-app",
  storageBucket: "streaming-web-app.appspot.com",
  messagingSenderId: "877009414204",
  appId: "1:877009414204:web:f409327402bfaffbfb3b39",
  measurementId: "G-R9E3J9YNW9"
};

export const app = initializeApp(firebaseConfig);