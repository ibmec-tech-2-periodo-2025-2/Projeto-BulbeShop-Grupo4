document.addEventListener("DOMContentLoaded", function() {
  const cod_seg = document.getElementById('cod_seg');
  const validade = document.getElementById('validade');
  const num_cc = document.getElementById('num_cc');
  const nome_cartao = document.getElementById('nome_cartao');
  const confirmar = document.querySelector('.b_confirmar');
  
  const selectPagamento = document.getElementById("pagamento");
  const formCredito = document.querySelector(".credito");

  selectPagamento.addEventListener("change", function() {
    const valor = selectPagamento.value; 

    if (valor === "credito" || valor === "debito") {
      formCredito.style.display = "flex";
    } else {
      formCredito.style.display = "none";
    }
  });
  confirmar.addEventListener('click', (event) => {
    console.log("Botão clicado!");
    event.preventDefault();
    if((cod_seg.value === '') || (validade.value === '') || (num_cc.value === '') || (nome_cartao.value === '')){
      window.alert("Informações do cartão inválidas, digite novamente.");
    }else{
      window.location.href = "../CONFIRMACAO/TCC.html";
    }
  })

});