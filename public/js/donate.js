//TODO: importar a classe e as funções necessárias

const btnAdd = document.getElementById('btnAdd');


btnAdd.addEventListener('click', () => {
    const txtRace = document.getElementById('race');
    const txtSize = document.getElementById('size');
    const description = document.getElementById('description');

    console.log(`raça ${txtRace.value}, tamanho ${txtSize.value}, description ${description.value}`);

    const radios = document.getElementsByName('isVaccinated')
    radios.forEach(element => {
        if(element.checked){
            let isvacinado = element.value
        }
    })
    
})