import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGcng2hn6QpYRUrVFYKy4OhlymqCVrQew",
  authDomain: "study-buddies-61e13.firebaseapp.com",
  projectId: "study-buddies-61e13",
  storageBucket: "study-buddies-61e13.appspot.com",
  messagingSenderId: "857954946818",
  appId: "1:857954946818:web:2baac59bfae2214157bc1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
