let color = ['azul','verde','amarelo'];

// Percorrer Array 

color.forEach((cores, index) => { // para saber o index coloca index como 
 //   segundo parâmetro
    console.log(cores);
});

// MAP: Não modifica o array original, ele retorna 
// um novo array com os itens resultantes do mapeamento, logo temos que de
// criar uma nova variável.

let colores = color.map((cor) => {
    return cor + ' claro';
});
// let colores = color.map(cor =>  cor + ' claro');
console.log(colores);

// Filtrando Elementos

let colores2 = color.filter(cor => cor.length ==5); // Mais resumida

let colores3 = color.filter ((cor) => {            // Muito longa
    return cor.length == 5
});

console.log(colores2);
console.log(colores3);


// Pesquisar Valores

let colores4 = color.find(cor => cor == 'verde');
console.log(colores4);


// Pesquisar Index

let colores5 = color.findIndex(cor => cor.length == 5)
console.log(colores5);

