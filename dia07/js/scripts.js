
const operacao = prompt("Digite o símbolo da operação que você deseja realizar. '+' '-' 'x' '/'");
let numero1;
let numero2;

switch(operacao){
    case '+':
        numero1 = parseFloat(prompt("Insira o primeiro valor"));
        numero2 = parseFloat(prompt("Insira o segundo valor"));
        soma(numero1, numero2);
        break;
    case '-':
        numero1 = parseFloat(prompt("Insira o primeiro valor"));
        numero2 = parseFloat(prompt("Insira o segundo valor"));
        subtracao(numero1, numero2);
        break;
    case 'x':
        numero1 = parseFloat(prompt("Insira o primeiro valor"));
        numero2 = parseFloat(prompt("Insira o segundo valor"));
        multiplicacao(numero1, numero2);
        break;
    case '/':
        numero1 = parseFloat(prompt("Insira o primeiro valor"));
        numero2 = parseFloat(prompt("Insira o segundo valor"));
        divisao(numero1, numero2);
        break;
    default:
        alert(`${operacao} Não foi pré-definida`);
}

function soma(numero1, numero2){   
    alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}

function subtracao(numero1, numero2){
    alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
}

function divisao(numero1, numero2){
    if (numero2 === 0) {
        alert("Não é possível dividir por 0");
    } else {
        let resultado = numero1 / numero2;
        alert(`${numero1} / ${numero2} = ${resultado}`);
    }
}

function multiplicacao(numero1, numero2){
    alert(`${numero1} x ${numero2} = ${numero1 * numero2}`);
}