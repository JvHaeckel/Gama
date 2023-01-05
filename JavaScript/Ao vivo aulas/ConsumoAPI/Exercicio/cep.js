

const formCEP = document.getElementById("formCEP");
const inputCEP = document.getElementById("cep");
const btnBuscar = document.getElementById("buscar");

const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const rua = document.getElementById("rua");

const buscaCEP = async (cep) => {
  return await fetch(`${BASE_URL}/cep/v2/${cep}`).then((response) => {
    return response.json();
  });
};

const feedbackBuscando = (buscando = true) => {
  inputCEP.disabled = buscando;
  btnBuscar.disabled = buscando;
  btnBuscar.innerText = buscando ? "Buscando" : "Buscar";
};

formCEP.addEventListener("submit", async (form) => {
  form.preventDefault();

  feedbackBuscando();

  const resposta = await buscaCEP(inputCNPJ.value);

  if (resposta?.message) {
    alert(resposta?.message);
  } else {
    estado.value = resposta?.estado;
    cidade.value = resposta?.cidade;
    bairro.value = resposta?.bairro;
    rua.value = resposta?.rua;
  }

  feedbackBuscando(false);
});




