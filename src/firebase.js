import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC6a2T2fVByiyY8wd_ZEbDJWl3egbW3DVU",
  authDomain: "clone-a0601.firebaseapp.com",
  databaseURL: "https://clone-a0601.firebaseio.com",
  projectId: "clone-a0601",
  storageBucket: "clone-a0601.appspot.com",
  messagingSenderId: "940338894721",
  appId: "1:940338894721:web:4f30eec808b40b4a5b3a80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};