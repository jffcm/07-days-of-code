let frutas = [];
let doces = [];
let congelados = [];
let outros = [];

let adicionarMais = 'sim';
let comida = "";
let categoria = "";

while (adicionarMais !== 'não') {
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.").toLowerCase();
    if (adicionarMais === 'sim') {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt(`Em qual categoria ${comida} se encaixa? Frutas, Doces, Congelados, Outros`).toLowerCase();

        switch (categoria) {
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

    } else if (adicionarMais === 'não') {
        alert(`Lista de compras: \nFrutas: ${frutas} \nDoces: ${doces} \nCongelados: ${congelados} \nOutros: ${outros}`);
    } else {
        alert(`Operação não reconhecida!`);
    }
}
