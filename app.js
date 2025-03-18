//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = document.getElementById("listaAmigos");

function adicionarAmigo(){
    let amigo = document.getElementById("amigo");
    if (amigo.value.trim() === ""){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo.value)
        amigo.value = ""
        atualizarLista();
    };
};

function atualizarLista(){
    lista.innerHTML = "";
    for (let i = 0; i <amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos [i];

        lista.appendChild(item);
    }
};

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Insira amigos para sortear!");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indice];
        let resultado = document.getElementById("resultado");
        lista.innerHTML = "";
        resultado.innerHTML = `O amigo sorteado é: ${sorteado}`;
    }
}