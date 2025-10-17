const diminuir = document.getElementById('diminuir');
const aumentar = document.getElementById('aumentar');
const quantidade = document.getElementById('quantidade');

let valor = 1;

diminuir.addEventListener('click', () => {
  if (valor > 1) {
    valor--;
    quantidade.textContent = valor;
  }
});

aumentar.addEventListener('click', () => {
  valor++;
  quantidade.textContent = valor;
});
const imagens = document.querySelectorAll('.slides img');
const anterior = document.querySelector('.btn-anterior');
const proximo = document.querySelector('.btn-proximo');
let indice = 0;

function mostrarImagem(novoIndice) {
  imagens[indice].classList.remove('ativo');
  indice = (novoIndice + imagens.length) % imagens.length;
  imagens[indice].classList.add('ativo');
}

anterior.addEventListener('click', () => mostrarImagem(indice - 1));
proximo.addEventListener('click', () => mostrarImagem(indice + 1));
