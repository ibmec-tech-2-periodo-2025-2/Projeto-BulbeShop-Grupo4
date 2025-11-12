document.addEventListener('DOMContentLoaded', () => {
    // seleciona alguns produtos da base existente
    const recomendados = PRODUTOS_DB.slice(0, 2); // exemplo: mostra 4 produtos
    const container = document.getElementById('recomendacoesContainer');


    // adiciona cada produto no container
    recomendados.forEach(prod => {
        container.innerHTML += criarCardProduto(prod);
    });
});
