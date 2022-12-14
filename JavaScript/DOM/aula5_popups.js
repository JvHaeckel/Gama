// Alert
let startbutton = document.getElementById('start');
startbutton.onclick = () => alert("Clicou em começar");

// Prompt
let stopButton = document.getElementById('stop');

stopButton.onclick = () => {
    let userName = prompt("quer parar mesmo? Digite seu nome: ");
    console.log(userName);
} 

// Confirm
let resetButton = document.getElementById('reset');

resetButton.onclick = () => {
    let confirmation = confirm("Quer cancelar mesmo??");
    console.log(confirmation);
}







