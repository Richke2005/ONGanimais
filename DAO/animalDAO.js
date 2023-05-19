import { db } from '../src/index';
import { collection, getDocs } from '@firebase/firestore';


const animalsRef = collection(db, 'animals')

getDocs(animalsRef).then((snapshots) =>{
 snapshots.docs.forEach((doc)=>{
    console.log(doc.data())
 })
})
