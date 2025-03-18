//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo");
    if (amigo.value.trim() === ""){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo.value)
        amigo.value = ""
    };
}