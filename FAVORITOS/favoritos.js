// ===== FAVORITOS.JS - GERENCIAMENTO DE FAVORITOS =====

// Função para carregar e renderizar favoritos
function carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const container = document.querySelector('.lista-produtos');
    
    if (favoritos.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <img src="../assets/images/coracao-cinza.png" alt="Sem favoritos" style="width: 150px;; margin-bottom: 20px;">
                <h2 style="color: var(--C700); font-size: 20px; margin-bottom: 10px;">Nenhum produto favorito</h2>
                <p style="color: var(--C500); margin-bottom: 20px;">Adicione produtos aos favoritos para vê-los aqui!</p>
                <a href="../HOME/home.html" style="background-color: var(--AU700); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">Ver Produtos</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    favoritos.forEach(idProduto => {
        const produto = buscarProdutoPorId(idProduto);
        if (!produto) return;
        
        const precoFinal = calcularPrecoComDesconto(produto.preco, produto.desconto);
        
        container.innerHTML += `
            <article class="caixaproduto" data-id="${produto.id}">
                <div class="produto-imagem">
                    <img src="../${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="produto-info">
                    <div class="info-header">
                        <h2 class="produto-nome">${produto.nome}</h2>
                    </div>
                   
                    <div class="produto-footer">
                        <div class="preco-container">
                            <span class="preco">${formatarPreco(precoFinal)}</span>
                        </div>
                    </div>
                </div>
                <img class="carrinho" src="../assets/images/carrinho.png" alt="Adicionar ao carrinho" onclick="adicionarAoCarrinhoDeFavoritos(${produto.id})" style="cursor: pointer;">
                <img class="lixeira" src="../assets/images/lixo.png" alt="Remover dos favoritos" onclick="removerDosFavoritos(${produto.id})" style="cursor: pointer;">
            </article>
        `;
    });
}

// Função para remover dos favoritos
function removerDosFavoritos(idProduto) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    favoritos = favoritos.filter(id => id !== idProduto);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    carregarFavoritos();
}

// Função para adicionar ao carrinho a partir dos favoritos
function adicionarAoCarrinhoDeFavoritos(idProduto) {
    const produto = buscarProdutoPorId(idProduto);
    
    if (!produto) {
        return;
    }
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const itemExistente = carrinho.find(item => item.id === idProduto);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            id: idProduto,
            quantidade: 1
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    carregarFavoritos();
});