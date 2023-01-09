let formBanco = document.getElementById('formBanco');
let inputName = document.getElementById('name');
let btnBuscar = document.getElementById('buscar');

let ispb = document.getElementById('ispbIn');
let names = document.getElementById('nameIn');
let code = document.getElementById('codeIn');
let fullName = document.getElementById('fullNameIn');

// Criar a função com arrow Function por isso colocamos como var, com intuito de converter em JSON
const buscaBanco = async (nome) => {
    return await fetch(`${BASE_URL}/banks/v1/${nome}`).then( response =>  response.json())   /* Segundo a regra 3 de Arrow function nõa precisa de () no response e nem do 
    return */
}

// Função que ??????
const feedbackBuscando = (buscando = true) => {
    inputName.disabled = buscando;
    btnBuscar.disabled = buscando;
    btnBuscar.innerText = buscando ? 'Buscando' : 'Buscar';
};

formBanco.addEventListener('submit', async (form) => {
    form.preventDefault();


feedbackBuscando();

const resposta = await buscaBanco(inputName.value)

if(resposta?.message){
    alert(resposta?.message);
} else {
    ispb.value = resposta?.ispbIn;
    names.value = resposta?.nameIn;
    code.value = resposta?.codeIn;
    fullName.value = resposta?.fullNameIn;
}


feedbackBuscando(false);

});