/* exercícios baseados na aula do youtube de Matheus Battisti - Hora de Codar
 https://www.youtube.com/watch?v=87gWRVGRZ5o&ab_channel=MatheusBattisti-HoradeCodar */

// Criando Promisses

let myPromise = new Promisse((resolve, reject) => {
    let nome = 'joao';

    if (nome === 'joao') {
        resolve('User found');
    } else {
        reject("User not found")
    }

    // Para imprimir na tela
    myPromise.then((data) => {
        console.log(data);
    })
});

// Encadeamento usando o Then - podemos colocar quanto quisermos para modificar os nossos dados

let myPromise2 = new Promisse((resolve, reject) => {
    let nome = 'joao';

    if (nome === 'joao') {
        resolve('User found');
    } else {
        reject("User not found")
    }

    // Para modificar ainda mais encadeamos um outro then deixando o texto em caixa baixa
    myPromise2
        .then((data) => {
            return data.toLoweCase();
        })
        .then((modificada) => {
            console.log(modificada);
        })
})

let myPromise3 = new Promisse((resolve, reject) => {
    let nome = 'matheus';

    if (nome === 'joao') {
        resolve('User found');
    } else {
        reject("User not found")
    }

    // Para modificar ainda mais encadeamos um outro then deixando o texto em caixa baixa
    myPromise3
        .then((data) => {
            console.log(data);
        })
        .catch((erros) => {
            console.log('Aconteceu um erro:' + erros);
        })
})

// Várias Promises

let p4 = new Promise((resolve, reject) => {
    resolve('P1 ok');
})
let p5 = new Promise((resolve, reject) => {
    resolve('P1 ok');
})
let p6 = new Promise((resolve, reject) => {
    resolve('P1 ok');
})

let allP = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data);
}) 

