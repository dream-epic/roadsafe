import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEyZRKsJ-wu3Pif_QVDI6QKrvJfKjt9p4",
  authDomain: "roadsafe-a9d03.firebaseapp.com",
  databaseURL: "https://roadsafe-a9d03.firebaseio.com",
  projectId: "roadsafe-a9d03",
  storageBucket: "roadsafe-a9d03.appspot.com",
  messagingSenderId: "81870254417",
  appId: "1:81870254417:web:f087f5e14a0a358c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const dbfirestore = firebase.firestore;

export {
  db,
  dbfirestore
};
