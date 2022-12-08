
// let recebaPapai = "A";

// function letra(recebaPapai){
//     let menor = letra.toLowerCase();
// if (letra == "a"  &&  letra =="b"){
//     return "Topzeira";
// }

// return "Chora Boy";
// }

console.log("João Victor Haeckel Gomes Fraga Rocha");

console.log("-------------")

let numeroA = 5;
let numeroB = 5;

function multiply (){
    return numeroA*numeroB;
}
console.log( "Resultado da questão 2: " + multiply());

function goku (){
    console.log("Oi eu sou o Goku");
}
console.log("-------------")
goku();

console.log("-------------")


function drivear(idade){
   
   if(idade < 18){
    console.log("Perdeu menor");
   }
   else{
    console.log("Beba e não dirija");
   }
}

drivear(18);

console.log("-------------")

for(let i = 0; i <= 20; i++){
    console.log(i);
}

console.log("-------------")

for(let i = 0; i <= 20; i++){

    if( i %2 == 0){
        // break pq não pega???
    }
    else{
        console.log(i);
    }
    
}

console.log("-------------")

function tabuada(num){
    
    for(let i = 0; i <= 10; i++){
        let tab = i * num;
        console.log(tab);
    }
}
tabuada(5);

console.log("-------------")

function converterEmHoras(min){
    let converte = min/60;
console.log(`O total  foi de: ${converte} hora(s)`);
fraseLegal(converte);
}

function fraseLegal(converte){
    if(converte == 0.5){
        console.log("Deu 30 minutos");
    }
    else if(converte == 1){
        console.log("Deu 1 hora");
    }
    else if(converte == 1.5){
        console.log("Deu 1 hora e meia");
    }
    else if(converte == 2){
        console.log("Deu 2 horas");
    }
    else if(converte == 3){
        console.log("Deu 3 horas");
    }
    

    // switch(converte){
    //     case 1 : converte == 0.5;
    //     return "Deu 30 minutos"; break;
    //     case 2 : converte == 1;
    //     return "Deu 30 minutos"; break;
    //     case 3 : converte == 2;
    //     return "Deu 30 minutos"; break;
    //     case 4 : converte == 3;
    //     return "Deu 30 minutos"; break;
    //     case 5 : converte == 4;
    //     return "Deu 30 minutos"; break;
        
    // }
}

converterEmHoras(120);