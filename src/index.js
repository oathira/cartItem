import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// import firebase from "firebase/compat/app";
// import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_BB1DR1Bbv1E3LjEQ3aD5tLQ-fM_LK2Y",
  authDomain: "cart-d2382.firebaseapp.com",
  projectId: "cart-d2382",
  storageBucket: "cart-d2382.appspot.com",
  messagingSenderId: "770559714379",
  appId: "1:770559714379:web:89da069cf1a8c8591819ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_BB1DR1Bbv1E3LjEQ3aD5tLQ-fM_LK2Y",
//   authDomain: "cart-d2382.firebaseapp.com",
//   projectId: "cart-d2382",
//   storageBucket: "cart-d2382.appspot.com",
//   messagingSenderId: "770559714379",
//   appId: "1:770559714379:web:89da069cf1a8c8591819ce"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
