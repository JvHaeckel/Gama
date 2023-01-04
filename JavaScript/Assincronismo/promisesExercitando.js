/* exercícios baseados na aula do youtube de Matheus Battisti - Hora de Codar
 https://www.youtube.com/watch?v=87gWRVGRZ5o&ab_channel=MatheusBattisti-HoradeCodar */

// Criando Promisses

let myPromise = new Promise((resolve, reject) => {
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

let myPromise2 = new Promise((resolve, reject) => {
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

let myPromise3 = new Promise((resolve, reject) => {
    let nome = 'matheus';

    if (nome === 'joao') {
        resolve('User found');
    } else {
        reject("User not found")
    }

    // Para modificar ainda mais encadeamos um outro then deixando o texto em caixa baixa
//     myPromise3
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((erros) => {
//             console.log('Aconteceu um erro:' + erros);
//         })
// })

// Várias Promises

let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('P1 ok');
    },2000)
    
})
let p2 = new Promise((resolve, reject) => {
    resolve('P1 ok');
})
let p3 = new Promise((resolve, reject) => {
    resolve('P1 ok');
})

// const resolveall = Promise.all([p1,p2,p3]).then((data) => {
//     console.log(data)
// })                    








