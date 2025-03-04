let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo").value.trim();
    if (inputNome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (amigos.includes(inputNome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    amigos.push(inputNome);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados! Reiniciando...");
        amigosSorteados = [];
    }

    let amigoSorteado = gerarSorteioSemRepeticao();
    amigosSorteados.push(amigoSorteado);
    
    document.getElementById("resultado").innerHTML = `Sorteado: ${amigoSorteado}`;
}

function gerarSorteioSemRepeticao() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[indiceAleatorio];

    if (amigosSorteados.includes(amigoEscolhido)) {
        return gerarSorteioSemRepeticao();
    } else {
        return amigoEscolhido;
    }
}
