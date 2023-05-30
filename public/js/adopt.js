import { db } from '../../src/connection'
import { collection, getDocs } from '@firebase/firestore';



const animalList = document.querySelector('#animal-list');

function renderAnimal(doc){
    let li = document.createElement('li');
    let name = document.createElement('h1');
    let race = document.createElement('h3');
    let img = document.createElement('img');
    let size = document.createElement('span');
    let description = document.createElement('span');
    let btnAdopt = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    race.textContent = doc.data().race;
    img.setAttribute('src', doc.data().url);
    img.setAttribute('alt', doc.data().name);
    img.classList = 'img-animal';
    size.innerHTML = `Porte: ${doc.data().size}`;
    description.textContent =`Descrição: ${doc.data().description}` ;

    btnAdopt.className = 'btns-adopt';
    btnAdopt.setAttribute('id', doc.id);
    btnAdopt.textContent = `Adotar ${doc.data().name}`;

    li.appendChild(name)
    li.appendChild(race);
    li.appendChild(img);
    li.appendChild(size);
    li.appendChild(description);
    li.appendChild(btnAdopt);
    
    animalList.appendChild(li);
    
}


const animalsRef = collection(db, 'animals');
getDocs(animalsRef).then( snapshot => {
    snapshot.docs.forEach( (doc) => {
        renderAnimal(doc);
    });
})

