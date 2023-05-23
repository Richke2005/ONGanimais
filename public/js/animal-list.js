import { db } from '../../src/connection'
import { collection, getDocs } from '@firebase/firestore';



const animalList = document.querySelector('#animal-list');

function renderAnimal(doc){
    let li = document.createElement('li');
    let race = document.createElement('span');
    let size = document.createElement('span');
    let description = document.createElement('span');
    let isVaccinated = document.createElement('span');

    li.setAttribute('data-id', doc.id);

    race.className = 'title'
    race.textContent = doc.data().race;
    size.innerHTML = `Altura: ${doc.data().size.height}m <br> Largura: ${doc.data().size.width}m`
    description.textContent = doc.data().description;
    if(doc.data().isVaccinated == true){
        isVaccinated.textContent = `Vacinação: Sim`
    }else{
        isVaccinated.textContent = `Vacinação: Nâo`
    }

    li.appendChild(race);
    li.appendChild(size);
    li.appendChild(description);
    li.appendChild(isVaccinated);

    animalList.appendChild(li);
}


const animalsRef = collection(db, 'animals');
getDocs(animalsRef).then( snapshot => {
    snapshot.docs.forEach( (doc) => {
        renderAnimal(doc);
    });
})

