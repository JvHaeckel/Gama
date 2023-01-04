
getCatFact = () =>  {
    let endpoint = 'https://catfact.ninja/fact';
    fetch(endpoint)  /* Fetch retoma um promise que para pegar vamos usar o then*/
    .then(response => {
        return response.json();
    })
    .then(data => {
        let catFactDiv = document.getElementById('cat-fact');
        catFactDiv.textContent = data.fact  /* Esse fact veio do console */
    })
}
getCatFact();