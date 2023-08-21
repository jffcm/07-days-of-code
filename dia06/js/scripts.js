
let frutas = [];
let doces = [];
let congelados = [];
let outros = [];

let adicionarMais;
let comida = "";
let categoria = "";

while (adicionarMais !== 3) {
    adicionarMais = parseInt(prompt("Você deseja adicionar uma comida na lista de compras? Digite '1'. Você deseja remover uma comida digite '2'. Caso deseje encerrar digite '3'."));
    if (adicionarMais === 1) {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt(`Em qual categoria ${comida} se encaixa? Frutas, Doces, Congelados, Outros`);
        adicionaComida(categoria, comida);

    } else if (adicionarMais === 2) {
        comida = prompt("Qual comida você gostaria de remover?");
        categoria = prompt(`Em qual categoria ${comida} se encaixa? Frutas, Doces, Congelados, Outros`);

        removeItem(comida, categoria);
        listaDeCompras();
        adicionarMais = parseInt(prompt("Você deseja adicionar uma comida na lista de compras? Digite '1'. Você deseja remover uma comida digite '2'. Caso deseje encerrar digite '3'."));

    } else if (adicionarMais === 3){
        listaDeCompras();
    
    } else {
        alert(`Operação não reconhecida!`);
    }
}

function listaDeCompras(){
    alert(`Lista de compras: \nFrutas: ${frutas} \nDoces: ${doces} \nCongelados: ${congelados} \nOutros: ${outros}`);
}

function adicionaComida(categoria, comida){
    switch (categoria.toLowerCase()) {
        case 'frutas':
            frutas.push(comida);
            break;
        case 'doces':
            doces.push(comida);
            break;
        case 'congelados':
            congelados.push(comida);
            break;
        case 'outros':
            outros.push(comida);
            break;
        default:
            alert(`Categoria ${categoria} não foi pré-definida.`);
    }
}

function removeItem(comida, categoria){
    let index;
    switch (categoria.toLowerCase()) {
        case 'frutas':
            index = frutas.indexOf(comida);
            
            if(frutas.includes(comida)){
                frutas.splice(index, 1)
            
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }

            break;
        case 'doces':
            index = doces.indexOf(comida);

            if(doces.includes(comida)){
                doces.splice(index, 1)
            
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            
            break;
        case 'congelados':
            index = congelados.indexOf(comida);

            if(congelados.includes(comida)){
                congelados.splice(index, 1)
            
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            
            break;
        case 'outros':
            index = outros.indexOf(comida);

            if(outros.includes(comida)){
                outros.splice(index, 1)
            
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            
            break;
        default:
            alert(`Categoria ${categoria} não foi pré-definida.`);
    }
}