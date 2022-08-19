import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxwL9QznnbkY6qUXQujQGMJFPWyXu4Q_M",
  authDomain: "zetech-grad-clearance.firebaseapp.com",
  projectId: "zetech-grad-clearance",
  storageBucket: "zetech-grad-clearance.appspot.com",
  messagingSenderId: "245572109595",
  appId: "1:245572109595:web:30681a26a43a0c511b7fbe",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
