//TODO: importar a classe e as funções necessárias
import { addAnimal, addOnStorage } from '../../DAO/animalDAO'
import { Animal } from '../../classes/animal.js'



 const btnAdd = document.getElementById('btnAdd');

    const txtName = document.getElementById('name');
    const txtRace = document.getElementById('race');
    const txtsize = document.getElementById('size');
    const description = document.getElementById('description');
    const file = document.getElementById('animal-file');
    
    
 btnAdd.addEventListener('click', () => {
    const objFile = file.files[0];
    if(verifyVoidRows()){
        const url = addOnStorage(objFile)
        const animal = new Animal(txtName.value, txtRace.value, txtsize.value, description.value, url)
        addAnimal(animal)
    }
})

function verifyVoidRows(){
    let isVoid = true;

    if (txtsize.value == ''){
        window.alert('Insira o tamanho para continuar');
        isVoid = false;
    }
    if(description.value == ""){
        window.alert('Insira a descrição para continuar');
        isVoid = false;
    }
    return isVoid;
}