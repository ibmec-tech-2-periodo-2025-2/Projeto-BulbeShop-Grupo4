const botao = document.querySelector(".but");
const cep = document.getElementById("cep");
const endereco = document.getElementById("ender");
const numero = document.getElementById("num");
const complemento = document.getElementById("comp");

// Salvar dados
botao.addEventListener("click", (event) => {
  event.preventDefault();

  localStorage.setItem("cep", cep.value);
  localStorage.setItem("endereco", endereco.value);
  localStorage.setItem("numero", numero.value);
  localStorage.setItem("complemento", complemento.value);

  window.location.href = "../PAGAMENTO/pagamento.html";
});

// Ativar botão
const inputsobg = [cep, endereco, numero];

function verificarCampos() {
  const todosPreenchidos = inputsobg.every(input => input.value.trim() !== '');

  if (todosPreenchidos) {
    botao.classList.remove('desabilitado');
  } else {
    botao.classList.add('desabilitado');
  }
}

inputsobg.forEach(input => {
  input.addEventListener('input', verificarCampos);
});

verificarCampos();

// Melhoria ao digitar CEP
cep.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
  this.value = this.value.replace(/^(\d{5})(\d)/, "$1-$2");
  if (this.value.length > 9) {
    this.value = this.value.slice(0, 9);
  }
});