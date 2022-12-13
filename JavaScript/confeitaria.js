// Biblioteca para capturar inputs de texto do usuário no console
const prompt = require('prompt-sync')({ sigint: true });

// Receber o pedido
function recebePedido() {
    let pedido = {
        sabor: null,
        confeitos: null,
    }
    // Qual o sabor do bolo?
    pedido.sabor = prompt("Qual o sabor do bolo? ");
    // Quais confeitos deseja?
    pedido.confeitos = prompt("Quais confeitos deseja? ");

    return pedido;
}

// Preparar o pedido
function preparaPedido() {

    let ingredientes_base = separaIngredientes(pedido);
    let tabuleiro = misturaBolo(pedido, ingredientes_base);
    let bolo = colocaForno(tabuleiro);
    bolo = confeitar(pedido, bolo);

    return bolo;
}


function separaIngredientes(pedido) {
    let ingredientes_base = 'ovos, leite, farinha, fermento';
    return ingredientes_base;
}

function misturaBolo(pedido, ingredientes_base) {
    return pedido.sabor + ', ' + ingredientes_base;
}

function colocaForno(tabuleiro) {
    return `bolo de ${tabuleiro}`;
}

function confeitar(pedido, bolo) {
    return `${bolo} confeitado com ${pedido.confeitos}`
}

// Calcular o preço
function calcularPreco() {

    let preco_final = calculaIngredientes();
    preco_final = calculaConfeitaria(preco_final);
    preco_final = despesasProducao(preco_final);
    preco_final = calculaGastos(preco_final);
    preco_final = calculaLucro(preco_final);
    return preco_final;

}

function calculaIngredientes() {
    return 10;
}

function calculaConfeitaria(preco_conf) {
    return preco_conf += preco_conf * 0.3;
}

function despesasProducao(despesas) {
    return despesas += 5;
}

function calculaGastos(despesas) {
    return despesas += 15;
}

function calculaLucro(despesas) {
    return despesas += despesas * 0.25;
}


// Entregar pedido
function entregaPedido(bolo,preco){
    console.log('Pedido pronto');
    console.log('Aproveite seu ' + bolo);

    prompt(`Seu pedido ficou no valor de ${preco} digite ENTER para pagar` )
}

// Receber dinheiro
function recebeDindin(preco){
    let valor_pago = prompt("Digite o valor do pagamento: ");

    while(valor_pago != preco){
        console.log(`Digitou o valor incorreto: ${valor_pago}`);
        valor_pago = prompt("Digite o valor do pagamento novamente: ");
    }
    return "Pagamento feito com sucesso";
}

// Fechar pedido e agradecer ao cliente
function agradecendo(){
    prompt("Obrigado e volte sempre!!!")
}

let pedido = recebePedido();

let bolo = preparaPedido(pedido);
console.log(bolo);

let preco = calcularPreco();
console.log(preco);

entregaPedido(bolo,preco);

let pagamento = recebeDindin(preco);
console.log(pagamento);

let gracias = agradecendo();
console.log(gracias);





