import{ initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from "@firebase/firestore";

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

 
 
 //const usersRef = collection(db, 'users');


// getDocs(usersRef)
//   .then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//       console.log(doc)
//     })
    
// }).catch(error =>{
//   console.log(error.message)
// })


// Add a new document with a generated id.
//  const docRef =  addDoc(collection(db, "users"), {
//    name: "Tokyo",
//    country: "Japan"
//  });
//  console.log("Document written with ID: ", docRef.id);



