import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJs34aq2y2Q17Fm4qcYpQmlwCHhGU__mw",
  authDomain: "clone-mma.firebaseapp.com",
  databaseURL: "https://clone-mma.firebaseio.com",
  projectId: "clone-mma",
  storageBucket: "clone-mma.appspot.com",
  messagingSenderId: "111126338524",
  appId: "1:111126338524:web:4a1203598a735853908d19",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
