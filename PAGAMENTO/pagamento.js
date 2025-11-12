document.addEventListener("DOMContentLoaded", function() {
  
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

});