/* Mesmo colocando a function primeiro a velocidade é rápida assim não vai
ter diferença por isso colocamos atraso de meio segundo*/

passo3 = (callback) => {
    setTimeout(() => {
        console.log('Passo 3')
        callback();
    }, 500)
}

passo4 = () => console.log("Passo 4");

// passo 1
console.log('Passo 1');

// passo 2
console.log('Passo 2');

// passo 3
passo3(passo4);


