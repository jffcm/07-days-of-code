
const randomNum = Math.floor(Math.random() * ( 10 - 0 + 1)) + 0;

let tentativas = 0;

while(tentativas<3){
    let guess = parseInt(prompt("Tente adivinhar um número entre 0 e 10:"));
    if(guess === randomNum){
        alert("Parabéns você acertou");
        break;
    } else if (isNaN(guess)) {
        alert("Entrada inválida. Por favor, insira um número.");
    } else if(tentativas === 2){
        alert(`Suas tentativas acabaram. O número era ${randomNum}.`);
    } else {
        alert(`${guess} não está correto, tente de novo`);
    }
    tentativas++;
} 