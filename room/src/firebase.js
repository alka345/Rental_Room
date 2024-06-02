import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3TSJ9a2MDrscsr8tC_Z4fygZWzTD60DU",
  authDomain: "rentalroom-1dc9c.firebaseapp.com",
  projectId: "rentalroom-1dc9c",
  storageBucket: "rentalroom-1dc9c.appspot.com",
  messagingSenderId: "914408226850",
  appId: "1:914408226850:web:72aaa1015acc05d1964a7b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()