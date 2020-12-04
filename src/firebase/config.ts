import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA9_pTzLOEc6DQGHC2PC1JOBqYxDRVnyQs",
  authDomain: "thesis-969d9.firebaseapp.com",
  projectId: "thesis-969d9",
  storageBucket: "thesis-969d9.appspot.com",
  messagingSenderId: "314936677118",
  appId: "1:314936677118:web:612473e8edfa3a7427cbaf",
  measurementId: "G-Z7DNCK6QT8",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
