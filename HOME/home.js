// Array para guardar o índice de cada carrossel
let indices = [0, 0, 0, 0]; // adicione mais zeros se tiver mais carrosséis
const produtoWidth = 160;

function moverCarrossel(direcao, trackId, carrosselIndex) {
    const track = document.getElementById(trackId);
    const totalProdutos = track.children.length;
    const maxIndex = totalProdutos - 2;
    
    indices[carrosselIndex] += direcao;

    if (indices[carrosselIndex] < 0) indices[carrosselIndex] = 0;
    if (indices[carrosselIndex] > maxIndex) indices[carrosselIndex] = maxIndex;

    track.style.transform = `translateX(-${indices[carrosselIndex] * produtoWidth}px)`;
}