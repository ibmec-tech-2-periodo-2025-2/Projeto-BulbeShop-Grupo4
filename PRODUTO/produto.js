// ===== PRODUTO.JS - PÁGINA DE DETALHES DO PRODUTO =====

// ===== CONTROLE DE QUANTIDADE =====
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

// ===== CARROSSEL =====
let imagens = [];
let indice = 0;

const anterior = document.querySelector('.btn-anterior');
const proximo = document.querySelector('.btn-proximo');

function mostrarImagem(novoIndice) {
    if (imagens.length === 0) return;
    imagens[indice].classList.remove('ativo');
    indice = (novoIndice + imagens.length) % imagens.length;
    imagens[indice].classList.add('ativo');
}

anterior.addEventListener('click', () => mostrarImagem(indice - 1));
proximo.addEventListener('click', () => mostrarImagem(indice + 1));


// ===== TOAST "COPIADO" =====
function mostrarToastCopiado() {
    const toast = document.createElement('div');
    toast.className = "toast-copiado";
    toast.textContent = "Link copiado!";
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("ativo"), 50);
    setTimeout(() => {
        toast.classList.remove("ativo");
        setTimeout(() => toast.remove(), 300);
    }, 1500);
}

function copiarLinkPagina() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => mostrarToastCopiado())
        .catch(() => console.error("Erro ao copiar link"));
}


// ===== FAVORITOS (com animação suave) =====
function toggleFavorito() {
    const idProduto = parseInt(new URLSearchParams(window.location.search).get("id"));
    if (!idProduto) return;

    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const img = document.querySelector('.coracao');
    const estaFavorito = favoritos.includes(idProduto);

    // animação de saída (diminui e some suavemente)
    img.classList.add("animando");

    setTimeout(() => {
        // troca da imagem enquanto está pequeno e invisível
        img.src = estaFavorito
            ? '../assets/images/coracao.png'
            : '../assets/images/coracao-vermelho.png';

        // voltar ao normal suavemente
        img.classList.remove("animando");

    }, 200);

    // salvar favoritos atualizado
    if (estaFavorito) {
        favoritos = favoritos.filter(id => id !== idProduto);
    } else {
        favoritos.push(idProduto);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function verificarFavorito() {
    const idProduto = parseInt(new URLSearchParams(window.location.search).get("id"));
    if (!idProduto) return;

    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const img = document.querySelector('.coracao');

    img.src = favoritos.includes(idProduto)
        ? '../assets/images/coracao-vermelho.png'
        : '../assets/images/coracao.png';
}


// ===== CARRINHO =====
function adicionarAoCarrinhoProduto() {
    const idProduto = parseInt(new URLSearchParams(window.location.search).get("id"));
    if (!idProduto) return;

    const produto = buscarProdutoPorId(idProduto);
    if (!produto) return;

    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const existente = carrinho.find(item => item.id === idProduto);

    if (existente) {
        existente.quantidade += valor;
    } else {
        carrinho.push({ id: idProduto, quantidade: valor });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    valor = 1;
    quantidade.textContent = valor;
}


// ===== CARREGAR PRODUTO =====
function carregarProduto() {
    const idProduto = parseInt(new URLSearchParams(window.location.search).get("id"));

    if (!idProduto) {
        window.location.href = '../HOME/home.html';
        return;
    }

    const produto = buscarProdutoPorId(idProduto);

    if (!produto) {
        window.location.href = '../HOME/home.html';
        return;
    }

    // Textos
    document.querySelector('.produto-titulo').textContent = produto.nome;
    document.querySelector('.descricao-texto').innerHTML = produto.descricao;

    // Preço
    const precoFinal = calcularPrecoComDesconto(produto.preco, produto.desconto);
    document.querySelector('.preco-atual').textContent = formatarPreco(precoFinal);

    if (produto.desconto > 0) {
        document.querySelector('.preco-antigo').textContent = formatarPreco(produto.preco);
        document.querySelector('.badge-desconto').textContent = `-${produto.desconto}%`;

        const economia = produto.preco - precoFinal;
        document.querySelector('.economia-info span').textContent =
            `Você economiza ${formatarPreco(economia)} nesta compra`;
    } else {
        document.querySelector('.preco-linha').style.display = 'none';
        document.querySelector('.economia-info').style.display = 'none';
    }

    // Imagens
    const slides = document.querySelector('.slides');
    slides.innerHTML = "";

    if (produto.imagemDetalhes?.length > 0) {
        produto.imagemDetalhes.forEach((img, index) => {
            slides.innerHTML += `<img src="../${img}" class="${index === 0 ? 'ativo' : ''}">`;
        });
    } else {
        slides.innerHTML = `<img src="../${produto.imagem}" class="ativo">`;
    }

    // Atualizar lista do carrossel
    imagens = document.querySelectorAll('.slides img');
    indice = 0;

    // Rating
    document.querySelector('.rating-numero').textContent = produto.avaliacao.toFixed(1);
    document.querySelector('.rating-reviews').textContent =
        `(${produto.totalAvaliacoes} avaliações)`;
}


// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', () => {
    carregarProduto();
    verificarFavorito();

    document.querySelector('.coracao').addEventListener('click', toggleFavorito);
    document.querySelector('.share').addEventListener('click', copiarLinkPagina);

    document.querySelectorAll('.btn-comprar')
        .forEach(btn => btn.addEventListener('click', adicionarAoCarrinhoProduto));
});
