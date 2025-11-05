const botao = document.querySelector(".but");
const cep = document.getElementById("cep");
const endereco = document.getElementById("ender");
const numero = document.getElementById("num");
const complemento = document.getElementById("comp");

botao.addEventListener("click", (event) => {
  event.preventDefault();

  localStorage.setItem("cep", cep.value);
  localStorage.setItem("endereco", endereco.value);
  localStorage.setItem("numero", numero.value);
  localStorage.setItem("complemento", complemento.value);

  window.location.href = "../PAGAMENTO/pagamento.html";
});
