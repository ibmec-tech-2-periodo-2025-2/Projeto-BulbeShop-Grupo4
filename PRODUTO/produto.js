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

const coracao = document.querySelector(".coracao");
const idProduto = 1; // mesmo ID usado em produtos-data.js

// 👉 Quando a página carrega, verifica se o produto já está salvo
let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
if (favoritos.includes(idProduto)) {
  coracao.classList.add("ativo"); // já começa vermelho
}

coracao.addEventListener("click", () => {
  coracao.classList.toggle("ativo");

  let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

  if (coracao.classList.contains("ativo")) {
    // Adiciona aos favoritos
    if (!favoritos.includes(idProduto)) {
      favoritos.push(idProduto);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      console.log(`✅ Produto ${idProduto} adicionado aos favoritos.`);
    }
  } else {
    // Remove dos favoritos
    favoritos = favoritos.filter(id => id !== idProduto);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    console.log(`🗑️ Produto ${idProduto} removido dos favoritos.`);
  }
});

const botaoCompartilhar = document.querySelector(".link");

botaoCompartilhar.addEventListener("click", () => {
  const url = window.location.href; // pega o link da página atual

  // tenta copiar o link para a área de transferência
  navigator.clipboard.writeText(url)
    .then(() => {
      alert("🔗 Link copiado para a área de transferência!");
    })
    .catch(err => {
      console.error("Erro ao copiar link: ", err);
      alert("❌ Não foi possível copiar o link.");
    });
});

botaoCompartilhar.addEventListener("click", () => {
  const url = window.location.href; // pega o link da página atual

  // tenta copiar o link para a área de transferência
  navigator.clipboard.writeText(url)
    .then(() => {
      alert("🔗 Link copiado para a área de transferência!");
    })
    .catch(err => {
      console.error("Erro ao copiar link: ", err);
      alert("❌ Não foi possível copiar o link.");
    });
})

botaoCompartilhar.addEventListener("click", () => {
  const url = window.location.href; // pega o link da página atual

  // tenta copiar o link para a área de transferência
  navigator.clipboard.writeText(url)
    .then(() => {
      alert("🔗 Link copiado para a área de transferência!");
    })
    .catch(err => {
      console.error("Erro ao copiar link: ", err);
      alert("❌ Não foi possível copiar o link.");
    });
});