
const empresa = "omma Sitens";
const receitas = [{
    id: 1,
    titulo: "cachorro quente",
    dificuldade: "simples",
    ingredientes: [
        "1xpão",
        "2x salsicha",
        "purê",
        "molho tomate",
        "cebola",
        "ketchup",
        "batata palha",
    ],
    preparo: 'dcjscnjsdncjdcnkdslncksdla',
    video: "youtube.com",
    vegano: false,
}];


const cadastrarReceita = (titulo, dificuldade, ingredientes, preparo,
    video, vegano) => {

    // 
    const id = receitas[receitas.length - 1].id + 1  || 1;
    receitas.push({
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        video,
        vegano,
      });
    console.log(`Receita ${titulo} cadastrada com sucesso!`);
};

// no lugar do array poderia ser uma lista de strings separad por vírgulas
cadastrarReceita("Pipoca doce", "simples", [

    "8 colheres milho",
    "8 colheres de açucar",
    "8 colheres de água"],
    "Coloque todos os ingredientes dentro da pipoqueira, ligue o fogo e mexa até terminar de estourar.",
    "https://google.com",
    false
);




const deletarReceita = (id) => {

    //  console.log(receitas.find((receita) => receitas.id === id ));
    //  console.log(receitas.filter((receita) => receitas.id === id ));


    const posicao = receitas.findIndex((receita) => receitas.id === id);
 

    if (posicao === -1) {
        console.log("receita não achada");
        return;
    }
    receitas.splice(posicao, 1);
};


const exibirReceita = () => {

    for (i = 0; i < receitas.length; i++) {

        
        console.log(receitas[i].titulo);
        console.log(receitas[i].ingredientes);
        console.log(receitas[i].vegano);
    }
}


const atualizarReceita = (id) => {

    // let id = 1;
    if (receitas.length) {
        id = receitas[receitas.length - 1].id + 1;
        console.log("Receita não encontrada");
    }

}


deletarReceita(1);
exibirReceita();