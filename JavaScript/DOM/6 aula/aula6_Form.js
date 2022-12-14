// selecionar os elementos

/*  inputs */
let form = document.getElementById('formulario');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let lsexo = document.getElementById('lsexo');
/* spans*/ 
let fname_msg = document.getElementById('msg-vld-fname');
let lname_msg = document.getElementById('msg-vld-lname');
let lsexo_msg = document.getElementById('msg-vld-lsexo');




// validação quando o usuário sai de um campo
fname.onblur = (event) =>{
    if(event.target.value.length < 3){
        fname_msg.textContent = "Valor deverá conter ao menos 3 carcteres"
        /* textContent - colocar msg*/
        fname_msg.style.display = 'block'
        /* para aparecer o texto pois no html ele bloqueou*/
    } else{
        fname_msg.style.display = 'none'
    }
}

// validação quando o usuário mudar um campo, quer retirar
// a opção SELECIONE
lsexo.onchange = (event) => {
    if(event.target.value == 'selecione'){
        lsexo_msg.textContent = "Selecione opção válida"
        lsexo_msg.style.display = 'block';
    }else{
        lsexo_msg.style.display = 'none';
    }
}

// Validação quando o usuário entra em um campo que estava errado
// a msg de erro gerada pelo span acusa erro até corrigimos e cli
// carmos fora, no entanto queremos que a msg saia logo após o clique

fname.onfocus = () => fname_msg.style.display = 'none';

// validação quando o usuário submete um formulário (enviar)s

 form.onsubmit = (event) => {
    if(fname.value.length < 3 || lsexo.value == 'selecione'){
        /* event.target - foi substituído por fname e lsexo*/
        alert("Por favor preencha corretamente os campos")
        event.preventDefault(); /* Evita enviar mesmo clicando submit*/
    }
 }



