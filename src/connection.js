import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

initializeApp({
  apiKey: "AIzaSyAECRdKsavkWsQ9m24moXyNwIvwcGx-Mcs",
  authDomain: "ong-animais.firebaseapp.com",
  projectId: "ong-animais",
  storageBucket: "ong-animais.appspot.com",
  messagingSenderId: "84663283469",
  appId: "1:84663283469:web:90abd94789303891c6ca44",
  measurementId: "G-CH44D864Z1"
})
 export const db = getFirestore();
 export const storage = getStorage();



