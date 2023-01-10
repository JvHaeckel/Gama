const formDdd = document.getElementById("formDdd");
const inputDdd = document.getElementById("ddd");
const btnBuscar = document.getElementById("buscar");
const detalhes = document.getElementById("detalhes");

// Transforma em JSON
const buscaDDD = async (ddd) => {
  return await fetch(`${BASE_URL}/ddd/v1/${ddd}`).then((response) => {
    return response.json();
  });
};

// Funçao que dará um feedback visual ao clicar no botão Buscar ele vira Buscando
const feedbackBuscando = (buscando = true) => {
  inputDdd.disabled = buscando;
  btnBuscar.disabled = buscando;
  btnBuscar.innerText = buscando ? "Buscando" : "Buscar";
};

formDdd.addEventListener("submit", async (form) => {
  form.preventDefault();

  feedbackBuscando();

  const resposta = await buscaDDD(inputDdd.value);

  if (resposta?.message) {
    detalhes.innerHTML = `<span style="color: red; font-weight: bold;">
      ${resposta.message}
    </span>`;
  } else {
    detalhes.innerText = JSON.stringify(resposta);
  }

  // Pq colocou como false ?
  feedbackBuscando(false);

  // fetch(`${baseURL}/ddd/v1/${inputDdd.value}`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     if (response?.message) {
  //       detalhes.innerHTML = `<span style="color: red; font-weight: bold;">
  //         ${response.message}
  //       </span>`;
  //     } else {
  //       detalhes.innerText = JSON.stringify(response);
  //     }

  //     inputDdd.disabled = false;
  //     btnBuscar.disabled = false;
  //     btnBuscar.innerText = "Buscar";
  //   });
});