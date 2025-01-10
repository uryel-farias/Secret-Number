alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 2;

let chute = prompt('Escolha um número entre 1 e 3.');

if(numeroSecreto == chute){
        console.log(`Você acertou! o número secreto era ${numeroSecreto}`);
} else {
    console.log("Você errou!");
}