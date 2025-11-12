// CARRINHO.JS - GERENCIAMENTO DO CARRINHO

// Função para carregar e renderizar o carrinho
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const container = document.querySelector('.lista-produtos');
    
    if (carrinho.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <img src="../assets/images/carrinho-cinza.png" alt="Carrinho vazio" style="width: 150px; opacity: 0.5; margin-bottom: 20px;">
                <h2 style="color: var(--C700); font-size: 20px; margin-bottom: 10px;">Seu carrinho está vazio</h2>
                <p style="color: var(--C500); margin-bottom: 20px;">Adicione produtos para começar suas compras!</p>
                <a href="../HOME/home.html" style="background-color: var(--AU700); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">Ver Produtos</a>
            </div>
        `;
        atualizarResumo();
        return;
    }
    
    container.innerHTML = '';
    
    carrinho.forEach(item => {
        const produto = buscarProdutoPorId(item.id);
        if (!produto) return;
        
        const precoUnitario = calcularPrecoComDesconto(produto.preco, produto.desconto);
        const precoTotal = precoUnitario * item.quantidade;
        
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
                        <div class="controle-quantidade">
                            <button class="btn-controle remover" onclick="diminuirQuantidade(${produto.id})" aria-label="Diminuir quantidade">
                                <img src="../assets/images/lixo.png" alt="">
                            </button>
                            <span class="quantidade">${item.quantidade}</span>
                            <button class="btn-controle adicionar" onclick="aumentarQuantidade(${produto.id})" aria-label="Aumentar quantidade">+</button>
                        </div>
                        <div class="preco-container">
                            <span class="preco">${formatarPreco(precoTotal)}</span>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });
    
    atualizarResumo();
}

// Função para aumentar quantidade
function aumentarQuantidade(idProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const item = carrinho.find(i => i.id === idProduto);
    
    if (item) {
        item.quantidade++;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        carregarCarrinho();
        mostrarToast('Quantidade atualizada!', 'sucesso');
    }
}

// Função para diminuir quantidade
function diminuirQuantidade(idProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const item = carrinho.find(i => i.id === idProduto);
    
    if (item) {
        if (item.quantidade > 1) {
            item.quantidade--;
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            carregarCarrinho();
            mostrarToast('Quantidade atualizada!', 'info');
        } else {
            // Remove do carrinho se quantidade for 1
            if (confirm('Deseja remover este produto do carrinho?')) {
                carrinho = carrinho.filter(i => i.id !== idProduto);
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                carregarCarrinho();
                mostrarToast('Produto removido do carrinho', 'info');
            }
        }
    }
}

// Função para atualizar o resumo do pedido
function atualizarResumo() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    let subtotal = 0;
    let totalDesconto = 0;
    
    carrinho.forEach(item => {
        const produto = buscarProdutoPorId(item.id);
        if (!produto) return;
        
        const precoOriginal = produto.preco * item.quantidade;
        const precoFinal = calcularPrecoComDesconto(produto.preco, produto.desconto) * item.quantidade;
        
        subtotal += precoOriginal;
        totalDesconto += (precoOriginal - precoFinal);
    });
    
    const valorFinal = subtotal - totalDesconto;
    
    // Atualizar no HTML
    const subtotalElement = document.querySelector('.linhas-resumo .linha-item:first-child .valor');
    const descontoElement = document.querySelector('.linhas-resumo .linha-item:nth-child(2) .valor');
    const totalElement = document.querySelector('.valor-atual');
    
    if (subtotalElement) subtotalElement.textContent = formatarPreco(subtotal);
    if (descontoElement) descontoElement.textContent = formatarPreco(totalDesconto);
    if (totalElement) totalElement.textContent = formatarPreco(valorFinal);
    
    // Mostrar/esconder resumo se carrinho estiver vazio
    const resumo = document.querySelector('.resumo-pedido');
    const botaoFinalizar = document.querySelector('.container-botao');
    
    if (carrinho.length === 0) {
        if (resumo) resumo.style.display = 'none';
        if (botaoFinalizar) botaoFinalizar.style.display = 'none';
    } else {
        if (resumo) resumo.style.display = 'block';
        if (botaoFinalizar) botaoFinalizar.style.display = 'block';
    }
}

// Função Toast para notificações
function mostrarToast(mensagem, tipo = 'info') {
    // Remove toast anterior se existir
    const toastAnterior = document.querySelector('.toast');
    if (toastAnterior) toastAnterior.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    
    document.body.appendChild(toast);
    
    // Animar entrada
    setTimeout(() => toast.classList.add('mostrar'), 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.classList.remove('mostrar');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Atualizar contador do carrinho no footer
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    
    // Você pode adicionar um badge visual aqui se quiser
    console.log(`Total de itens no carrinho: ${totalItens}`);
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    carregarCarrinho();
    atualizarContadorCarrinho();
});