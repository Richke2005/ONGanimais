import { db } from '../src/connection';
import { collection, getDoc, addDoc } from '@firebase/firestore';

// Add a new document with a generated id.
export async function addDono(Dono){
    const docRef = getDoc( await addDoc(collection(db, "donos"),
    {
    cpf: Dono.getCpf,
    nome: Dono.getNome,
    email: Dono.getEmail,
    celular: Dono.getCelular,
    endereco: Dono.getEndereco,
    animalAdotado: Dono.getAnimalId,
    registerDate: Dono.getRegisterDate
    }
  ))
  .catch(err => {window.alert(err)})
  .finally(() => { 
   docRef.then((snapshot) => {
     console.log(`document writen with id: ${snapshot.id}`)
   })
 })
 }