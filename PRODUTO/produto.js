// ==========================================================
// CONTROLE DE QUANTIDADE
// ==========================================================
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



// ==========================================================
// CARROSSEL DE IMAGENS
// ==========================================================
const imagens = document.querySelectorAll('.slides img');
const anterior = document.querySelector('.btn-anterior');
const proximo = document.querySelector('.btn-proximo');
let indice = 0;

function mostrarImagem(novoIndice) {
    if (imagens.length === 0) return;

    if (imagens[indice]) imagens[indice].classList.remove('ativo');

    indice = (novoIndice + imagens.length) % imagens.length;
    imagens[indice].classList.add('ativo');
}

anterior.addEventListener('click', () => mostrarImagem(indice - 1));
proximo.addEventListener('click', () => mostrarImagem(indice + 1));



// ==========================================================
// FAVORITOS — SALVAR APENAS IDs
// ==========================================================

// Função para pegar ID do produto pela URL
function obterIdProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
}

const coracao = document.querySelector(".coracao");

// Alternar favorito ao clicar
coracao.addEventListener("click", () => {
    const idProduto = obterIdProduto();
    if (isNaN(idProduto)) return;

    let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (favoritos.includes(idProduto)) {
        favoritos = favoritos.filter(id => id !== idProduto);
        coracao.classList.remove("ativo");
    } else {
        favoritos.push(idProduto);
        coracao.classList.add("ativo");
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
});

// Estado inicial do coração
function verificarFavorito() {
    const idProduto = obterIdProduto();
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (favoritos.includes(idProduto)) {
        coracao.classList.add("ativo");
    }
}

document.addEventListener("DOMContentLoaded", verificarFavorito);



// ==========================================================
// COMPARTILHAR LINK
// ==========================================================
const botaoCompartilhar = document.querySelector(".link");

botaoCompartilhar.addEventListener("click", () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
        .then(() => {
            alert("🔗 Link copiado para a área de transferência!");
        })
        .catch(() => {
            alert("❌ Não foi possível copiar o link.");
        });
});



// ==========================================================
// ADICIONAR AO CARRINHO
// ==========================================================

// 🔥 IMPORTANTE: no HTML o botão deve ser:
// <button id="btnAdicionarCarrinho" class="btn-comprar">Adicionar ao Carrinho</button>

const botaoCarrinho = document.getElementById("btnAdicionarCarrinho");

if (botaoCarrinho) {
    botaoCarrinho.addEventListener("click", () => {
        const idProduto = obterIdProduto();
        const produto = buscarProdutoPorId(idProduto); // vem do produtos-data.js
        if (!produto) return;

        let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

        const itemExistente = carrinho.find(item => item.id === idProduto);

        if (itemExistente) {
            // aumenta a quantidade do mesmo item
            itemExistente.quantidade += valor; // valor = quantidade escolhida na página
        } else {
            // adiciona o item novo
            carrinho.push({
                id: idProduto,
                quantidade: valor
            });
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // Redireciona para o carrinho
        window.location.href = "../CARRINHO/carrinho.html";
    });
}
