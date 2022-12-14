// Evento de click
let button_start = document.getElementById('start')

button_start.onclick = function (){
    console.log('clicou Start')
}

// Evento de tecla pressionada (digitação)
let teclado = document.getElementById('input_text');

teclado.onkeydown = function (event){
    console.log("As teclas digitadas foram: " + event.keycode );
}

// Evento de carregamento de elemento


// Evento de mouse sobre elemento


// Evento de tirar o mouse do elemento
