const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

import { getAnalytics } from "firebase/analytics";

const serviceAccount = require('./path/to/serviceAccountKey.json');

 initializeApp({
     //Serve para o firebase entender que nosso bakend tem permissão de acessar o banco
  apiKey: "AIzaSyAECRdKsavkWsQ9m24moXyNwIvwcGx-Mcs",
  authDomain: "ong-animais.firebaseapp.com",
  projectId: "ong-animais",
  storageBucket: "ong-animais.appspot.com",
  messagingSenderId: "84663283469",
  appId: "1:84663283469:web:90abd94789303891c6ca44",
  measurementId: "G-CH44D864Z1"
 });

const app = initializeApp();

const analytics= getAnalytics(app)

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
