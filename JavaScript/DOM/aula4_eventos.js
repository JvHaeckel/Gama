// Evento de click
  let startButton = document.getElementById('start');

  startButton.onclick = function(){
    console.log('Clicou em Start');
  }

  // Evento de tecla pressionada (digitação)
  let inputText = document.getElementById('input_text');

  inputText.onkeydown = function(event){
    console.log('Digitou: ', event.keyCode);
    // Pq n'ao concatenou com + ?
  }

// Evento de carregamento de elemento
let corpo = document.getElementsByTagName('body')[0];


// Quando usamos o getElements, é como se fosse
// array por isso necessitamos especificar qual 
// elemento vai ser impresso. Caso queira imprimir
// tudo basta usar console.log(corpo) sem função e
// abaixo da variável CORPO. 

corpo.onload = function(){
    console.log("Carregou o body");
}

// Evento de mouse sobre elemento
startButton.onmouseover = function (event){
console.log("Mouse está sobre" , event.target.innerText);
}

// Evento de tirar o mouse do elemento
startButton.onmouseout = function (event){
    console.log("O mouse saiu ", event.innerText);
}