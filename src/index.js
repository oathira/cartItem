import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from "firebase/compat/app";
 import "firebase/compat/auth"; 
 import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_BB1DR1Bbv1E3LjEQ3aD5tLQ-fM_LK2Y",
  authDomain: "cart-d2382.firebaseapp.com",
  projectId: "cart-d2382",
  storageBucket: "cart-d2382.appspot.com",
  messagingSenderId: "770559714379",
  appId: "1:770559714379:web:89da069cf1a8c8591819ce"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






