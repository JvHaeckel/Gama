// Aula de Loops - Lista de produtos


let produtos = [ {
    codigo: 1,
    validade: new Date('2050-07-07')
},
{
    codigo: 2,
    validade: new Date('2050-08-08')
},
{
    codigo: 3,
    validade: new Date('2050-08-08')
},
{
    codigo: 4,
    validade: new Date('2050-08-08')
},
{
    codigo: 5,
    validade: new Date('2050-06-08')
},
];

for(let i = 0; i < produtos.length; i ++){
    if(produtos[i].validade < new Date('2050-08-01')){
        console.log(" O produto " + produtos[i].codigo + " está vencido");
    }else{
        console.log( " O produto " + produtos[i].codigo + " está bom");
    }
}
