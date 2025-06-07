import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2dxHh-k4wRr8wphGj0czOkTCO87rneoA",
  authDomain: "chat-5ccb0.firebaseapp.com",
  projectId: "chat-5ccb0",
  storageBucket: "chat-5ccb0.firebasestorage.app",
  messagingSenderId: "106379616441",
  appId: "1:106379616441:web:1ad3ac4d81045564637b68"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();