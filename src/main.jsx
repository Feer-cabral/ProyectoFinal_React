import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0YNlbW_N2uuL5Pm5aHx_tJ-QTkB9IBKU",
  authDomain: "feer-proyect.firebaseapp.com",
  projectId: "feer-proyect",
  storageBucket: "feer-proyect.appspot.com",
  messagingSenderId: "803410549913",
  appId: "1:803410549913:web:4c99c83ecd6b68104a2c08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
