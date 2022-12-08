// Arrays - operações básicas

let car = ["Civicão", "gol", "PoloGay"];
console.log(car);

// Adicionando elemento no inicio
car.unshift("Fusquinha")
console.log(car);

// Adicionando elemento no fim
car.push("Cavalo");
console.log(car);

// Adicionando elemento em uma posição específica
car.splice(0,1,'Fusca','Gavi','Marea')
console.log(car);


// // Removendo elemento no inicio
// car.shift();
// console.log(car);

// // Removendo elemento no fim
// car.pop();
// console.log(car);

// Removendo elemento no meio
car.splice(3,1);
console.log(car);


// Spread - Para resumir algumas operações acima (combinar e colar)


