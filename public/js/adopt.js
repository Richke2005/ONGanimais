import { db } from '../../src/connection'
import { collection, getDocs } from '@firebase/firestore';



const animalList = document.querySelector('#animal-list');
const absoluteCenter = document.querySelector('#absolute-center');

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
    description.textContent =`Descrição: ${doc.data().description}`;

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

    btnAdopt.addEventListener('click', (snapshot)=>{
       const animalId = snapshot.target.id
       renderForm()
    })
}


const animalsRef = collection(db, 'animals');
getDocs(animalsRef).then( snapshot => {
    snapshot.docs.forEach( (doc) => {
        renderAnimal(doc);
    });
})

function renderForm(){
    absoluteCenter.innerHTML = '';
    const form = document.createElement('form');
    const lblCpf = document.createElement('label');
    const inptCpf = document.createElement('input');
    const lblName = document.createElement('label');
    const inptName = document.createElement('input');
    const lblEmail = document.createElement('label');
    const inptEmail = document.createElement('input');
    const lblCel = document.createElement('label');
    const inptCel = document.createElement('input');
    const lblEnd = document.createElement('label');
    const inptEnd = document.createElement('input');

    form.className = 'donate-forms'

    lblCpf.setAttribute('for', 'cpf');
    lblCpf.textContent  = 'Digite seu cpf:';
    inptCpf.setAttribute('id', 'cpf');
    inptCpf.placeholder = '000000000/00';

    lblName.setAttribute('for', 'name');
    lblName.textContent = 'Digite seu nome:';
    inptName.setAttribute('id', 'name');
    inptName.placeholder = 'Your Name';




    form.appendChild(lblCpf);
    form.appendChild(inptCpf);
    form.appendChild(lblName);
    form.appendChild(inptName);

    absoluteCenter.appendChild(form);
    absoluteCenter.style.visibility = 'visible';
}

//       #cpf;
//       #nome;
//       #email;
//       #celular;
//       #endereco;