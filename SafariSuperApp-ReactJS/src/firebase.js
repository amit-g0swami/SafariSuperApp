import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCexb7mSCrd96vwRqsmRaYlk8HBiWTfv_g",
  authDomain: "superapk-a42b6.firebaseapp.com",
  projectId: "superapk-a42b6",
  storageBucket: "superapk-a42b6.appspot.com",
  messagingSenderId: "738797783762",
  appId: "1:738797783762:web:e10d3c467b114c5935fb0b",
  measurementId: "G-41YTQQ8HT7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
