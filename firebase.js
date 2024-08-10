// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC00F144gnzNTQtwBkQJ26dDoKIEVu4f14",
  authDomain: "inventory-management-e381d.firebaseapp.com",
  projectId: "inventory-management-e381d",
  storageBucket: "inventory-management-e381d.appspot.com",
  messagingSenderId: "122458636211",
  appId: "1:122458636211:web:93a08719422d6bd41095c6",
  measurementId: "G-9TJGN9SC7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export{firestore}