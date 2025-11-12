// ===== PRODUTO.JS - PÁGINA DE DETALHES DO PRODUTO =====

// Controle de quantidade
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

// Carrossel de imagens
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

// ===== FUNÇÕES DE FAVORITOS E CARRINHO =====

// Adicionar/Remover dos Favoritos
function toggleFavorito() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = parseInt(urlParams.get('id'));
    
    if (!idProduto) {
        return;
    }
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const imgCoracao = document.querySelector('.coracao');
    
    if (favoritos.includes(idProduto)) {
        // Remove dos favoritos
        favoritos = favoritos.filter(id => id !== idProduto);
        imgCoracao.src = '../assets/images/coracao.png';
    } else {
        // Adiciona aos favoritos
        favoritos.push(idProduto);
        imgCoracao.src = '../assets/images/coracao-preenchido.png';
    }
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Verificar se produto já está nos favoritos ao carregar
function verificarFavorito() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = parseInt(urlParams.get('id'));
    
    if (!idProduto) return;
    
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const imgCoracao = document.querySelector('.coracao');
    
    if (favoritos.includes(idProduto)) {
        imgCoracao.src = '../assets/images/coracao-preenchido.png';
    }
}

// Adicionar ao Carrinho
function adicionarAoCarrinhoProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = parseInt(urlParams.get('id'));
    
    if (!idProduto) {
        return;
    }
    
    const produto = buscarProdutoPorId(idProduto);
    
    if (!produto) {
        return;
    }
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const itemExistente = carrinho.find(item => item.id === idProduto);
    
    if (itemExistente) {
        itemExistente.quantidade += valor;
    } else {
        carrinho.push({
            id: idProduto,
            quantidade: valor
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Reset quantidade
    valor = 1;
    quantidade.textContent = valor;
}

// Carregar dados do produto da URL
function carregarProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = parseInt(urlParams.get('id'));
    
    if (!idProduto) {
        window.location.href = '../HOME/home.html';
        return;
    }
    
    const produto = buscarProdutoPorId(idProduto);
    
    if (!produto) {
        window.location.href = '../HOME/home.html';
        return;
    }
    
    // Atualizar informações na página
    document.querySelector('.produto-titulo').textContent = produto.nome;
    document.querySelector('.descricao-texto').textContent = produto.descricao.replace(/<[^>]*>/g, '');
    
    const precoFinal = calcularPrecoComDesconto(produto.preco, produto.desconto);
    document.querySelector('.preco-atual').textContent = formatarPreco(precoFinal);
    
    if (produto.desconto > 0) {
        document.querySelector('.preco-antigo').textContent = formatarPreco(produto.preco);
        document.querySelector('.badge-desconto').textContent = `-${produto.desconto}%`;
        const economia = produto.preco - precoFinal;
        document.querySelector('.economia-info span').textContent = `Você economiza ${formatarPreco(economia)} nesta compra`;
    } else {
        document.querySelector('.preco-linha').style.display = 'none';
        document.querySelector('.economia-info').style.display = 'none';
    }
    
    // Atualizar imagens do carrossel
    const slides = document.querySelector('.slides');
    slides.innerHTML = '';
    
    if (produto.imagemDetalhes && produto.imagemDetalhes.length > 0) {
        produto.imagemDetalhes.forEach((img, index) => {
            slides.innerHTML += `<img src="../${img}" class="${index === 0 ? 'ativo' : ''}" alt="${produto.nome}">`;
        });
    } else {
        slides.innerHTML = `<img src="../${produto.imagem}" class="ativo" alt="${produto.nome}">`;
    }
    
    // Atualizar rating
    document.querySelector('.rating-numero').textContent = produto.avaliacao.toFixed(1);
    document.querySelector('.rating-reviews').textContent = `(${produto.totalAvaliacoes} avaliações)`;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    carregarProduto();
    verificarFavorito();
    
    // Botão de favorito
    document.querySelector('.coracao').addEventListener('click', toggleFavorito);
    
    // Botões de adicionar ao carrinho
    const botoesCarrinho = document.querySelectorAll('.btn-comprar');
    botoesCarrinho.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            adicionarAoCarrinhoProduto();
        });
    });
});