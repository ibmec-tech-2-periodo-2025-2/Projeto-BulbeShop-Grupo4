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
