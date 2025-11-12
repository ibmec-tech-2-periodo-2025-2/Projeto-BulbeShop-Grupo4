// ===== CONTROLE DOS CARROSSÉIS =====
let indices = [0, 0, 0, 0, 0];
const produtoWidth = 176; // 160px + 16px de gap

// Variáveis para controle do toque
let startX = 0;
let currentX = 0;
let isDragging = false;

// ===== RENDERIZAR PRODUTOS NOS CARROSSÉIS =====

// Função que cria o HTML de um card de produto
function criarCardProduto(produto) {
    // Calcula preço com desconto
    const precoFinal = calcularPrecoComDesconto(produto.preco, produto.desconto);
    const precoFormatado = formatarPreco(precoFinal);
    
    // Define se mostra preço antigo
    const precoAntigoHTML = produto.desconto > 0 
        ? `<span class="preco-antigo">${formatarPreco(produto.preco)}</span>`
        : '';
    
    // Cria estrelas (baseado na avaliação)
    const estrelasCompletas = Math.floor(produto.avaliacao);
    const estrelas = '★'.repeat(estrelasCompletas) + '☆'.repeat(5 - estrelasCompletas);
    
    // Retorna o HTML do card
    return `
        <a href="../PRODUTO/produto.html?id=${produto.id}" class="produto-card">
            
            <div class="produto-imagem">
                <img src="../${produto.imagem}" alt="${produto.nome}" onerror="this.src='../assets/images/placeholder.png'">
            </div>
            
            <div class="produto-info">
                <h3 class="produto-nome">${produto.nome}</h3>
                
                <div class="produto-preco-wrapper">
                    <span class="preco-atual">${precoFormatado}</span>
                    ${precoAntigoHTML}
                </div>
                
                <div class="produto-avaliacao">
                    <span class="estrelas">${estrelas}</span>
                    <span class="avaliacoes">(${produto.totalAvaliacoes})</span>
                </div>
            </div>
            
            <button class="btn-adicionar" onclick="event.preventDefault(); adicionarAoCarrinho(${produto.id})" aria-label="Adicionar ao carrinho">
                <span class="btn-icon">+</span>
                <span class="btn-text">Adicionar</span>
            </button>
        </a>
    `;
}

// Função para preencher um carrossel
function preencherCarrossel(trackId, produtos) {
    const track = document.getElementById(trackId);
    
    if (!track) {
        console.error(`Carrossel ${trackId} não encontrado!`);
        return;
    }
    
    // Limpa conteúdo anterior
    track.innerHTML = '';
    
    // Adiciona cada produto
    produtos.forEach(produto => {
        track.innerHTML += criarCardProduto(produto);
    });
}

// ===== FUNÇÃO PARA ADICIONAR AO CARRINHO =====
function adicionarAoCarrinho(idProduto) {
    const produto = buscarProdutoPorId(idProduto);
    
    if (!produto) {
        alert('Produto não encontrado!');
        return;
    }
    
    // Busca carrinho atual do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    // Verifica se produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === idProduto);
    
    if (itemExistente) {
        // Incrementa quantidade
        itemExistente.quantidade += 1;
        alert(`${produto.nome} - Quantidade atualizada no carrinho!`);
    } else {
        // Adiciona novo item
        carrinho.push({
            id: idProduto,
            quantidade: 1
        });
        alert(`${produto.nome} adicionado ao carrinho!`);
    }
    
    // Salva no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualiza contador do carrinho (se tiver)
    atualizarContadorCarrinho();
}

// Atualiza contador do carrinho no footer/header
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    
    // Se tiver badge de contador, atualiza
    const badge = document.getElementById('carrinho-contador');
    if (badge) {
        badge.textContent = totalItens;
        badge.style.display = totalItens > 0 ? 'flex' : 'none';
    }
}

// ===== INICIALIZAÇÃO DA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Carregando produtos...');
    console.log('Total de produtos:', PRODUTOS_DB.length);
    
    // CARROSSEL 1: Lâmpadas Inteligentes
    const lampadas = buscarPorCategoriaHome('lampadas');
    console.log('Lâmpadas:', lampadas.length);
    preencherCarrossel('carrosselTrack1', lampadas);
    
    // CARROSSEL 2: Luminárias Inteligentes
    const luminarias = buscarPorCategoriaHome('luminarias');
    console.log('Luminárias:', luminarias.length);
    preencherCarrossel('carrosselTrack2', luminarias);
    
    // CARROSSEL 3: Fitas LED
    const fitas = buscarPorCategoriaHome('fitas');
    console.log('Fitas LED:', fitas.length);
    preencherCarrossel('carrosselTrack3', fitas);
    
    // CARROSSEL 4: Acessórios de Controle
    const acessorios = buscarPorCategoriaHome('acessorios');
    console.log('Acessórios:', acessorios.length);
    preencherCarrossel('carrosselTrack4', acessorios);
    
    // CARROSSEL 5: Assistentes Virtuais
    const assistentes = buscarPorCategoriaHome('assistentes');
    console.log('Assistentes:', assistentes.length);
    preencherCarrossel('carrosselTrack5', assistentes);
    
    // Inicializa controle de arrastar nos carrosséis
    inicializarCarrossel('carrosselTrack1', 0);
    inicializarCarrossel('carrosselTrack2', 1);
    inicializarCarrossel('carrosselTrack3', 2);
    inicializarCarrossel('carrosselTrack4', 3);
    inicializarCarrossel('carrosselTrack5', 4);    
    
    // Atualiza contador do carrinho
    atualizarContadorCarrinho();
    
    console.log('✅ Produtos carregados com sucesso!');
});

// ===== CONTROLE DE ARRASTAR OS CARROSSÉIS =====

function inicializarCarrossel(trackId, carrosselIndex) {
    const track = document.getElementById(trackId);
    const container = track.parentElement;
    
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        track.style.transition = 'none';
    });
    
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const currentTranslate = -indices[carrosselIndex] * produtoWidth;
        
        track.style.transform = `translateX(${currentTranslate + diff}px)`;
    });
    
    container.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diff = currentX - startX;
        const threshold = 50;
        
        track.style.transition = 'transform 0.3s ease';
        
        if (diff > threshold) {
            moverCarrossel(-1, trackId, carrosselIndex);
        } else if (diff < -threshold) {
            moverCarrossel(1, trackId, carrosselIndex);
        } else {
            track.style.transform = `translateX(-${indices[carrosselIndex] * produtoWidth}px)`;
        }
    });
}

function moverCarrossel(direcao, trackId, carrosselIndex) {
    const track = document.getElementById(trackId);
    const totalProdutos = track.children.length;
    const maxIndex = totalProdutos - 2;
    
    indices[carrosselIndex] += direcao;

    if (indices[carrosselIndex] < 0) indices[carrosselIndex] = 0;
    if (indices[carrosselIndex] > maxIndex) indices[carrosselIndex] = maxIndex;

    track.style.transform = `translateX(-${indices[carrosselIndex] * produtoWidth}px)`;
}

// ===== FUNÇÕES DE CARRINHO E FAVORITOS NA HOME =====

function adicionarAoCarrinho(idProduto) {
    const produto = buscarProdutoPorId(idProduto);
    
    if (!produto) {
        mostrarToast('Produto não encontrado!', 'erro');
        return;
    }
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const itemExistente = carrinho.find(item => item.id === idProduto);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
        mostrarToast(`Quantidade atualizada!`, 'sucesso');
    } else {
        carrinho.push({
            id: idProduto,
            quantidade: 1
        });
        mostrarToast(`${produto.nome} adicionado ao carrinho!`, 'sucesso');
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

function mostrarToast(mensagem, tipo = 'info') {
    const toastAnterior = document.querySelector('.toast');
    if (toastAnterior) toastAnterior.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('mostrar'), 100);
    
    setTimeout(() => {
        toast.classList.remove('mostrar');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}