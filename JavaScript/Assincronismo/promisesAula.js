// Aula de Promisses: Async e Await 2

// Pedir o bolo
/* Para poder usar async com arrow function tive que tranfromar a funcao em uma variável er assim: pedido = () => */
let pedido = async () => {         
    console.log('Pedindo bolo...');
    return new Promise(
        function(resolve, reject){
            setTimeout(() => {
                console.log('Fazendo bolo...');
                resolve('Bolo de chocolate');
            }, 1000);
        }
    );
}

// pedido = () => {
//     setTimeout(() =>{        
//         console.log("Pedindo o bolo")
//     }, 1000)
    
// };

festejar = (bolo) => console.log("Fazendo festa com bolo de " + bolo);

let preparaFesta = async () => {
    /* Encomendando*/
    // let bolo = pedido();
    
    pedido().then(
        function(bolo){
            festejar(bolo);
        }
    );
    /* Festejando*/
    // festejar('laranja');
}
/* Trabalhar */
trabalhar = () => console.log("Trabalhando");

/* Treinar*/
treinar = () => console.log("Treinando");

/* Viajar*/
viajar = () => console.log("Viajando");


/* Execução Programa - chamada de funções */
let bolo = preparaFesta();
trabalhar();
treinar();
viajar();


