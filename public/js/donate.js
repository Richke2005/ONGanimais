//TODO: importar a classe e as funções necessárias
import { addAnimal } from '../../DAO/animalDAO'
import { Animal } from '../../classes/animal.js'



 const btnAdd = document.getElementById('btnAdd');

 btnAdd.addEventListener('click', () => {
     let isVaccinated;
     const txtRace = document.getElementById('race');
     const length = document.getElementById('length');
     const height = document.getElementById('heigth');
     const description = document.getElementById('description');

     document.getElementsByName('isVaccinated').forEach(element => {
        if (element.checked){
            isVaccinated = element.value;
        }
    })

    const animal = new Animal(txtRace.value, {length: length.value, height: height.value }, description.value, isVaccinated)
    addAnimal(animal);
 })