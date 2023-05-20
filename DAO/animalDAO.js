import { db } from '../src/connection';
import { collection, getDocs, addDoc } from '@firebase/firestore';


// Add a new document with a generated id.


function addAnimal(Animal){ 
   const docRef =  addDoc(collection(db, "animals"), 
   {
   race: Animal.getRace,
   size: Animal.getSize, 
   description: Animal.getDescription,
   registerDate: Animal.getRegisterDate, 
   isVaccinated: Animal.getIsVaccinated
   }
 )
 .catch(err => {console.log(err)})
 .finally(() => { console.log("Document written with ID: ", docRef.id)
})

}


 