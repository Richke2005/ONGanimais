//TODO: importar a classe e as funções necessárias
import { addAnimal, addOnStorage } from '../../DAO/animalDAO'
import { Animal } from '../../classes/animal.js'



 const btnAdd = document.getElementById('btnAdd');

 btnAdd.addEventListener('click', () => {
     const txtName = document.getElementById('name');
     const txtRace = document.getElementById('race');
     const txtsize = document.getElementById('size');
     const description = document.getElementById('description');
     const file = document.getElementById('animal-file');
     const objFile = file.files[0];
    
    const url = addOnStorage(objFile)
    const animal = new Animal(txtName.value, txtRace.value, txtsize.value, description.value, url)
    addAnimal(animal)
})