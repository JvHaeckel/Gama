// Selecionar os elementos
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let time = document.getElementsByTagName("time")[0];
let body = document.getElementsByTagName("body")[0];

// Escrever no localStorage - guardar a hora no banco de dados após user escrever
startButton.onclick = () => {
    let data = new Date();
    localStorage.setItem('time', data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
/* */
}


// Buscar no localStorage
body.onload = () => time.textContent = localStorage.getItem('time');


// Remover do localStorage
stopButton.onclick = () => localStorage.removeItem('time');


// Limpar localStorage - remover tudo de uma vez

resetButton.onclick = () => localStorage.clear();
