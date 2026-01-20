import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjzeb8tUSXSvHI7MSMalNOmN7PhZ9Rw64",
  authDomain: "traveling-project-4046a.firebaseapp.com",
  projectId: "traveling-project-4046a",
  storageBucket: "traveling-project-4046a.firebasestorage.app",
  messagingSenderId: "422257891572",
  appId: "1:422257891572:web:770cb25bbd40a84e7526a1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


