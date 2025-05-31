import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMgE6AV81UOi95K-_VUaH07JKsxcK6D2c",
  authDomain: "chat-ideafix-64b12.firebaseapp.com",
  projectId: "chat-ideafix-64b12",
  storageBucket: "chat-ideafix-64b12.firebasestorage.app",
  messagingSenderId: "995346273699",
  appId: "1:995346273699:web:5e592cbf6b811a37a13616"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };