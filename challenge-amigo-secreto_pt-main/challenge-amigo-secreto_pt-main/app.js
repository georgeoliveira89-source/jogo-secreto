let amigoSecreto = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite um nome válido!');
    } else if (amigoSecreto.includes(nome)) {
        alert('Esse nome já foi adicionado!');
    } else {
        amigoSecreto.push(nome);
        atualizarLista();
        input.value = '';
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigoSecreto.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigoSecreto[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigoSecreto.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
    } else {
        const indice = Math.floor(Math.random() * amigoSecreto.length);
        const amigoSorteado = amigoSecreto[indice];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
    }
}
