const botao = document.querySelector(".but");
const cep = document.getElementById("cep");
const endereco = document.getElementById("ender");
const numero = document.getElementById("num");
const complemento = document.getElementById("comp");
const cepInfoContainer = document.getElementById('cep-info');
const cepInfoTexto = document.querySelector('.txtcep');

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

// API do CEP
cep.addEventListener('blur', function() {
  buscarCEP(this.value);
});

async function buscarCEP(cepVal) {
  const cepLimpo = cepVal.replace(/\D/g, '');
  if (cepLimpo.length !== 8) {
    limparFormularioParcial();
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const data = await response.json();

    if (data.erro) {
      console.error("CEP não encontrado.");
      limparFormularioParcial();
    } else {
      preencherCampos(data);
    }
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    limparFormularioParcial();
  }
}

function preencherCampos(data) {
  endereco.value = data.logradouro;
  
  cepInfoTexto.innerHTML = `${data.uf}, ${data.localidade}, ${data.bairro}`;
  cepInfoContainer.classList.remove('escondido');
  
  endereco.readOnly = true; 
  
  numero.focus(); 
  
  verificarCampos();
}


function limparFormularioParcial() {
  endereco.value = "";
  endereco.readOnly = false;
  cepInfoContainer.classList.add('escondido');
  verificarCampos();
}