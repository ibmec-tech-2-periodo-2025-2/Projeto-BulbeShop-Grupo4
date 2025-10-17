// Array para guardar o índice de cada carrossel
let indices = [0, 0, 0, 0];
const produtoWidth = 160;

// Variáveis para controle do toque
let startX = 0;
let currentX = 0;
let isDragging = false;

// Função para inicializar cada carrossel
function inicializarCarrossel(trackId, carrosselIndex) {
    const track = document.getElementById(trackId);
    const container = track.parentElement;
    
    // Evento quando começa a tocar
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        track.style.transition = 'none';
    });
    
    // Evento enquanto arrasta
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const currentTranslate = -indices[carrosselIndex] * produtoWidth;
        
        track.style.transform = `translateX(${currentTranslate + diff}px)`;
    });
    
    // Evento quando solta o toque
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

// Função de movimento
function moverCarrossel(direcao, trackId, carrosselIndex) {
    const track = document.getElementById(trackId);
    const totalProdutos = track.children.length;
    const maxIndex = totalProdutos - 2;
    
    indices[carrosselIndex] += direcao;

    if (indices[carrosselIndex] < 0) indices[carrosselIndex] = 0;
    if (indices[carrosselIndex] > maxIndex) indices[carrosselIndex] = maxIndex;

    track.style.transform = `translateX(-${indices[carrosselIndex] * produtoWidth}px)`;
}

// Inicialize os 4 carrosséis
inicializarCarrossel('carrosselTrack1', 0);
inicializarCarrossel('carrosselTrack2', 1);
inicializarCarrossel('carrosselTrack3', 2);
inicializarCarrossel('carrosselTrack4', 3);