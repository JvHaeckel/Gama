
getCatFact = () =>  {
    let endpoint = 'https://catfact.ninja/fact';
    fetch(endpoint)  /* Fetch retoma um promise que para pegar vamos usar o then*/
    .then(response => {

        if(!response.ok){
            return new Error ('Requisição falhou');
        }

        return response.json();
    })
    .then(data => {
        let catFactDiv = document.getElementById('cat-fact');
        catFactDiv.textContent = data.fact; /* Esse fact veio do console*/
    })
    .catch(error => {  /* Quando colocamos o catch após alguns then significa que vai erro*/
        console.error('Requisição falhou com o erro' + error); 
    })
}
getCatFact();  


checkAge = (name) => {
    // let endpoint = 'https://api.agify.io?name=' + name;

    fetch('https://api.agify.io?name=' + name)
    .then(response =>  response.json())  /* Regra 3 - Se o corpo da função contiver apenas uma única instrução, você poderá 
    omitir as chaves escrevendo tudo em uma única linha e usar o retorno implícito, que são valores retornados sem ter que
     usar a palavra return..
    */
    .then(data => {
        let ageSpam = documen.getElementById('age-value');
        ageSpam.textContent = data.age;  /* Na chamada do API vimos que a propriedade é age*/
    })
    .catch(error => {
        console.error('Requisição falhou')
    })
}

let ageForm = document.getElementById('age-form');

ageForm.onsubmit = (event) => {
    let name = document.getElementById('name');
    checkAge(name.value);
    event.preventDefault(); // previne que ao clicar em Submit a página recarregue
}




