// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//import "firebase/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBZfPcU2NZ1Orq6WeRylIzfSQ8s0Iv8gII",
  authDomain: "coactchatapp.firebaseapp.com",
  databaseURL: "https://coactchatapp-default-rtdb.firebaseio.com/",
  projectId: "coactchatapp",
  storageBucket: "coactchatapp.appspot.com",
  messagingSenderId: "863217793638",
  appId: "1:863217793638:web:863f41e0215b14fc380ba7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
