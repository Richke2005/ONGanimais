import { db } from '../../src/connection'
import { collection, getDocs } from '@firebase/firestore';



const animalList = document.querySelector('#animal-list');

function renderAnimal(doc){
    let li = document.createElement('li');
    let name = document.createElement('h1');
    let race = document.createElement('h3');
    let size = document.createElement('span');
    let description = document.createElement('span');
    let btnAdopt = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    race.textContent = doc.data().race;
    size.innerHTML = `Altura: ${doc.data().size.height}m <br> Comprimento: ${doc.data().size.length}m`
    description.textContent =`Descrição: ${doc.data().description}` ;

    li.appendChild(name)
    li.appendChild(race);
    li.appendChild(size);
    li.appendChild(description);

    btnAdopt.className = 'btns-adopt';
    btnAdopt.setAttribute('id', doc.id);
    btnAdopt.textContent = `Adotar ${doc.data().name}`;

    animalList.appendChild(li);
    animalList.appendChild(btnAdopt);
}


const animalsRef = collection(db, 'animals');
getDocs(animalsRef).then( snapshot => {
    snapshot.docs.forEach( (doc) => {
        renderAnimal(doc);
    });
})

