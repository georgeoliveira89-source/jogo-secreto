alert ('boas vindas ao jogo numero secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1

// enquanto o chute nao for igual ao nS
while(chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre  1 e 10');
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

        alert(`isso ai, voce descobril o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
