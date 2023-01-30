import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDkm9wR5Avvscu1Ijtp_VVwYj3rGU2JM2k",
  authDomain: "backend-e-commerce.firebaseapp.com",
  projectId: "backend-e-commerce",
  storageBucket: "backend-e-commerce.appspot.com",
  messagingSenderId: "25114339865",
  appId: "1:25114339865:web:452cbfeafe12b8b67ad888"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)