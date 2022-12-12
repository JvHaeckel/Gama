// Aula de Funções - Confeitaria

//  Cálculo do preço dos ingredientes 
function soma (){
    let ing1 = 1;
    let ing2 = 2;
    let ing3 = 3;
    let total = ing1 + ing2 + ing3;
    return total;
}

// Porcentagem da Confeitaria
 function porcentagem(preco_conf){
    let porc = 0.3
    preco_conf += preco_conf * porc;
   
    return preco_conf;
 }

// DespesasProdução
function despesas (despesa){
    despesa += 5;
    return despesa;
}

// Lucro
function lucro (calculo){
    calculo += + (0.3 * calculo);  // calculo = calculo + (0.3 * calculo)
    return  calculo;
}

// Chamando as Funções ele fezcriando apenas uma variável assim ele pode mudar a 
// ordem pela qual as contas serão feitas 

let preco_Top = soma() ;
console.log(preco_Top);

let porcent = porcentagem(preco_Top);
console.log(porcent);

let despe = despesas(porcent);
console.log(despe);

let lucros = lucro(despe);

console.log(`O preço final de venda vai ser de: R$ ${lucros}`);



