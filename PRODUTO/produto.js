// ==========================================================
// CONTROLE DE QUANTIDADE (com animação BOUNCE)
// ==========================================================
const diminuir = document.getElementById('diminuir');
const aumentar = document.getElementById('aumentar');
const quantidade = document.getElementById('quantidade');

let valor = 1;

// Função de animação de bounce
function animarQuantidade() {
    quantidade.classList.add("quantidade-animada");
    setTimeout(() => quantidade.classList.remove("quantidade-animada"), 150);
}

diminuir.addEventListener('click', () => {
    if (valor > 1) {
        valor--;
        quantidade.textContent = valor;
        animarQuantidade();
    }
});

aumentar.addEventListener('click', () => {
    valor++;
    quantidade.textContent = valor;
    animarQuantidade();
});


// ==========================================================
// CARROSSEL DE IMAGENS — agora com fade suave (CSS faz o fade)
// ==========================================================
const imagens = document.querySelectorAll('.slides img');
const anterior = document.querySelector('.btn-anterior');
const proximo = document.querySelector('.btn-proximo');
let indice = 0;

function mostrarImagem(novoIndice) {
    if (imagens.length === 0) return;

    imagens[indice].classList.remove('ativo');

    indice = (novoIndice + imagens.length) % imagens.length;

    imagens[indice].classList.add('ativo');
}

anterior.addEventListener('click', () => {
    mostrarImagem(indice - 1);

    // feedback visual no botão
    anterior.classList.add("btn-click");
    setTimeout(() => anterior.classList.remove("btn-click"), 150);
});

proximo.addEventListener('click', () => {
    mostrarImagem(indice + 1);

    // feedback visual
    proximo.classList.add("btn-click");
    setTimeout(() => proximo.classList.remove("btn-click"), 150);
});


// ==========================================================
// FAVORITOS — SALVAR APENAS IDs + animação melhorada no coração
// ==========================================================

function obterIdProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
}

const coracao = document.querySelector(".coracao");

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

        // animação extra de pulsar
        coracao.classList.add("coracao-pulse");
        setTimeout(() => coracao.classList.remove("coracao-pulse"), 300);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
});

// Estado inicial
function verificarFavorito() {
    const idProduto = obterIdProduto();
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (favoritos.includes(idProduto)) {
        coracao.classList.add("ativo");
    }
}

document.addEventListener("DOMContentLoaded", verificarFavorito);


// ==========================================================
// COMPARTILHAMENTO — com feedback visual (pop rápido)
// ==========================================================
const botaoCompartilhar = document.querySelector(".link");

botaoCompartilhar.addEventListener("click", () => {
    const url = window.location.href;

    // animação visual instantânea
    botaoCompartilhar.classList.add("share-pop");
    setTimeout(() => botaoCompartilhar.classList.remove("share-pop"), 200);

    navigator.clipboard.writeText(url)
        .then(() => {
            alert("🔗 Link copiado para a área de transferência!");
        })
        .catch(() => {
            alert("❌ Não foi possível copiar o link.");
        });
});


// ==========================================================
// ADICIONAR AO CARRINHO — animação + feedback no botão
// ==========================================================
const botaoAdicionar = document.querySelector(".btn-adicionar-carrinho");

if (botaoAdicionar) {
    botaoAdicionar.addEventListener("click", () => {
        const idProduto = obterIdProduto();
        if (isNaN(idProduto)) return;

        let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
        const existente = carrinho.find(p => p.id === idProduto);

        if (existente) {
            existente.quantidade += valor;
        } else {
            carrinho.push({ id: idProduto, quantidade: valor });
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // animação de sucesso
        botaoAdicionar.classList.add("btn-sucesso");
        setTimeout(() => botaoAdicionar.classList.remove("btn-sucesso"), 600);
    });
}
