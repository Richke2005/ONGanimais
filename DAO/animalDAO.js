import { db, storage } from '../src/connection';
import { collection, getDoc, addDoc } from '@firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';


// Add a new document with a generated id.
export async function addAnimal(Animal){
   const docRef = getDoc( await addDoc(collection(db, "animals"),
   {
   name: Animal.getName,
   race: Animal.getRace,
   size: Animal.getSize,
   url: await Animal.getUrl,
   description: Animal.getDescription,
   registerDate: Animal.getRegisterDate,
   }
 ))
 .catch(err => {window.alert(err)})
 .finally(() => { 
  docRef.then((snapshot) => {
    console.log(`document writen with id: ${snapshot.id}`)
  })
})
}

//upload the photo on storage
export async function addOnStorage(objFile){
  const pathRef = ref(storage, `/images/${objFile.name}`)
  const imgRef = await uploadBytesResumable(pathRef, objFile)
  const url = await getDownloadURL(imgRef.ref)
  return Promise.resolve(url)
  .catch(err => {window.alert(err.message)})
  .finally(()=> {
    window.alert(`Upload success`);
  })
}


//Try:
// export function addOnStorage(objFile){
//     let url
//     const fileRef = ref(storage, `/images/${objFile.name}`)
//     uploadBytesResumable(fileRef, objFile).then( (img) =>{
//       url = getDownloadURL(img.ref)
//       console.log(url) 
//       return url
//     })
    
//     .catch(err => {window.alert(err)})
//     .finally(() =>{
//       console.log(`Upload image`)
     
//   })
// }
 