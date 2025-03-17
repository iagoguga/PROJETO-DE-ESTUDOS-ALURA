//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Criamos um array para armazenar os nomes dos amigos.
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Capturamos o valor digitado no campo de texto pelo usuário
    let nomeAmigo = document.getElementById("amigo").value;

    // Verificamos se o campo está vazio
    if (nomeAmigo.trim() === "") {
        // Se estiver vazio, mostramos um alerta
        alert("Por favor, insira um nome.");
    } else {
        // Se o nome não estiver vazio, adicionamos o nome ao array de amigos
        amigos.push(nomeAmigo);

        // Após adicionar, limpamos o campo de texto
        document.getElementById("amigo").value = "";

        // Atualizamos a lista de amigos na tela
        atualizarListaAmigos();
    }
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    // Pegamos o elemento HTML que vai conter a lista
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista para evitar nomes duplicados
    lista.innerHTML = "";

    // Usamos um loop para percorrer todos os amigos no array
    for (let i = 0; i < amigos.length; i++) {
        // Criamos um item <li> para cada amigo
        let li = document.createElement("li");

        // Definimos o conteúdo do item como o nome do amigo
        li.textContent = amigos[i];

        // Adicionamos o item <li> à lista HTML
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verificamos se a lista de amigos não está vazia
    if (amigos.length === 0) {
        // Se não houver amigos, mostramos um alerta
        alert("Não há amigos para sortear.");
        return; // Saímos da função
    }

    // Geramos um índice aleatório entre 0 e o tamanho do array de amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Pegamos o nome do amigo sorteado utilizando o índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    // Atualizamos a lista de resultados na tela para mostrar o amigo sorteado
    let resultado = document.getElementById("resultado");

    // Limpamos o conteúdo da lista de resultados
    resultado.innerHTML = "";

    // Criamos um item <li> para o nome sorteado
    let liResultado = document.createElement("li");

    // Definimos o conteúdo do item como o nome do amigo sorteado
    liResultado.textContent = `Amigo secreto sorteado: ${amigoSorteado}`;

    // Adicionamos o item à lista de resultados
    resultado.appendChild(liResultado);
}
