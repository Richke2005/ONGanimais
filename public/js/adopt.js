import { db } from '../../src/connection'
import { collection, getDocs, getDoc, query, where, updateDoc, doc } from '@firebase/firestore';
import { addDono } from '../../DAO/donoDAO.js';
import { Dono } from '../../classes/dono';



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
       renderForm(animalId)
    })
}


const animalsRef = collection(db, 'animals');
getDocs(animalsRef).then( snapshot => {
    snapshot.docs.forEach( (doc) => {
        renderAnimal(doc);
    });
})

function renderForm(animalId){
    

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
    const lblCep = document.createElement('label');
    const inptCep = document.createElement('input');
    const btnAdopt = document.createElement('button');

    

    lblCpf.setAttribute('for', 'cpf');
    lblCpf.textContent  = 'Digite seu cpf:';
    inptCpf.setAttribute('id', 'cpf');
    inptCpf.placeholder = '000000000/00';

    lblName.setAttribute('for', 'name');
    lblName.textContent = 'Digite seu nome:';
    inptName.setAttribute('id', 'name');
    inptName.placeholder = 'Your Name';

    lblEmail.setAttribute('for', 'email');
    lblEmail.textContent = 'Digite seu Email:';
    inptEmail.setAttribute('id', 'email');
    inptEmail.type = 'email';
    inptEmail.placeholder = 'example@gmail.com';

    lblCel.setAttribute('for', 'celular');
    lblCel.textContent = 'Digite seu celular';
    inptCel.setAttribute('id', 'celular');
    inptCel.placeholder = '(11)90000-0000';

    lblEnd.setAttribute('for', 'endereço');
    lblEnd.textContent = 'Digite seu endereço:';
    inptEnd.setAttribute('id', 'endereço');

    lblCep.setAttribute('for', 'cep');
    lblCep.textContent = 'Digite o cep da residência:';
    inptCep.setAttribute('id', 'cep');  
    

    btnAdopt.textContent = 'Adotar animal';


    form.appendChild(lblCpf);
    form.appendChild(inptCpf);
    form.appendChild(lblName);
    form.appendChild(inptName);
    form.appendChild(lblEmail);
    form.appendChild(inptEmail);
    form.appendChild(lblCel);
    form.appendChild(inptCel);
    form.appendChild(lblEnd);
    form.appendChild(inptEnd);
    form.appendChild(lblCep);
    form.appendChild(inptCep);


    form.classList.add("form-donor");
    absoluteCenter.appendChild(form);
    absoluteCenter.appendChild(btnAdopt)
    absoluteCenter.style.visibility = 'visible';

    btnAdopt.addEventListener("click", async (e)=>{
        e.preventDefault();
        const animalRef = await doc(db, 'animals', animalId)
        updateDoc(animalRef, {
            doado: true
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            console.log(`document write with id: ${animalRef.id}`)
        })

        let dono = new Dono(inptCpf.value, inptName.value, inptEmail.value, inptCel.value, {Logradouro: inptEnd.value, CEP: inptCep.value}, animalRef.id)
        addDono(dono)
        //send a verification email to people who adopt the animal
        Email.send({
            SecureToken : "02206e88-761b-47bb-8bb3-b5a7bb8d8e7b",
            To : dono.getEmail,
            From : "projetoacolher4@gmail.com",
            Subject : "Adoção de Animal",
            Body : "example of email"
        }).then(
          message => alert(message)
        );

    })

}


