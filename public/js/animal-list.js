import { db } from '../../src/connection'
import { collection, getDocs } from '@firebase/firestore';



const animalList = document.querySelector('#animal-list');

function renderAnimal(doc){
    let li = document.createElement('li');
    let name = document.createElement("h1");
    let race = document.createElement('span');
    let size = document.createElement('span');
    let description = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.innerText = doc.data().name;
    race.className = 'title'
    race.textContent = doc.data().race;
    size.innerHTML = doc.data().size;
    description.textContent = doc.data().description;
    

    li.appendChild(race);
    li.appendChild(size);
    li.appendChild(description);

    animalList.appendChild(li);
}


const animalsRef = collection(db, 'animals');
getDocs(animalsRef).then( snapshot => {
    snapshot.docs.forEach( (doc) => {
        renderAnimal(doc);
    });
})

