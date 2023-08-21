
const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");

let linguagem;

if (area == "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue?");
} else if (area == "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java");
} else {
    alert("Parece que você digitou alguma coisa errada U_U");
}

const fullstack = prompt("Você gostaria de continuar se especializando na área? digite 'sim'. Se deseja se tornar uma pessoa fullstack, digite 'não'.");

if (fullstack == "sim") {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
} else if (fullstack == "não") {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
} else {
    alert("Parece que você digitou alguma coisa errada U_U");
}

let tecnologias = prompt("Gostaria de aprender sobre mais alguma tecnologia? Digite 'sim' ou 'não'.");

while(tecnologias == "sim"){
    const nomeDasTecnologias = prompt("Qual?");
    alert(`${nomeDasTecnologias} é realmente uma tecnologia muito legal!`);
    tecnologias = prompt("Gostaria de aprender sobre mais alguma tecnologia? Digite 'sim' ou 'não'.");
}
