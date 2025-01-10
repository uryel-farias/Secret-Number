alert ('Boas vindas ao jogo do número secreto!');

let numeroMaximo = 150;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute, tentativas = 1; 

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    if(numeroSecreto == chute){
        break;
            
    } else {
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}` )
        } else {
            alert(`O número secreto é menor que ${chute}`)
        }
        tentativas++
    }

}

let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';

alert(`Você acertou em ${tentativas} ${palavraTentativa}! o número secreto era ${numeroSecreto}`);