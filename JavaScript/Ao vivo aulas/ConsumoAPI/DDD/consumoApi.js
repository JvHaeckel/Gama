
let formDdd = document.getElementById("formDdd");
let inputDdd = document.getElementById("ddd");
let btnBuscar = document.getElementById("buscar");


let baseUrl = "https://brasilapi.com.br/api"

formDdd.addEventListener("submit", (forrm) => {
    formDdd.preventDefault();

    inputDdd.disabled = true
    btnBuscar.disabled = true;
    btnBuscar.innerText = "Buscando"

fetch(`${baseURL}/ddd/v1/${inputDdd.value}`)
.then((response) => {
    return response.json();
})
.then((response) => {

    if(response?.message){
        detalhes.innerHTML = `<span style="color: red; text-weight: bold;`>
    }
})


inputDdd.disabled = true
btnBuscar.disabled = true;
btnBuscar.innerText = "Buscando"

});

// formDdd.addEventListener("submit", (forrm) => {
//     formDdd.preventDefault();

//     inputDdd.disabled = true
//     btnBuscar.disabled = true;
//     btnBuscar.innerText = "Buscando"

// fetch(`${baseURL}/ddd/v1/${inputDdd.value}`)
// .then((response) => {
//     return response.json();
// })
// .then((response) => {

//     if(response?.message){
//         detalhes.innerHTML = `<span style="color: red; text-weight: bold;`>
//     }
// })


// inputDdd.disabled = true
// btnBuscar.disabled = true;
// btnBuscar.innerText = "Buscando"

// });









