const azul = document.querySelector('#azul')
const vermelho = document.querySelector('#vermelho')
const verde = document.querySelector('#verde')

function corAzul() {
    document.body.style.backgroundColor = 'blue';
}
function corVermelha() {
    document.body.style.backgroundColor = 'red';
}
function corVerde() {
    document.body.style.backgroundColor = 'green';
}


azul.addEventListener("click", corAzul)
vermelho.addEventListener('mouseover', corVermelha)
verde.addEventListener('dblclick', corVerde)
