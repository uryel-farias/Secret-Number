alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 3;

let chute, tentativas = 1; 

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 5.');

    if(numeroSecreto == chute){
            alert(`Você acertou em ${tentativas} tentativas! o número secreto era ${numeroSecreto}`);
    } else {
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}` )
        } else {
            alert(`O número secreto é menor que ${chute}`)
        }
        console.log("Você errou!");
    }
    tentativas++
}
