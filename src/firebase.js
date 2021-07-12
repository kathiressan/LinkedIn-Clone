import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtBdl3Vlrm8IVFf3egOjvSAlGa6PW-iLo",
  authDomain: "linkedin-clone-yt-6c873.firebaseapp.com",
  projectId: "linkedin-clone-yt-6c873",
  storageBucket: "linkedin-clone-yt-6c873.appspot.com",
  messagingSenderId: "780049813797",
  appId: "1:780049813797:web:1351e62b1b3971e61acacc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
