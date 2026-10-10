window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards > div');
    
    cards.forEach(card => {
        // Registra a altura inicial
        card.dataset.alturaOriginal = card.offsetHeight + "px";
        card.style.maxHeight = card.offsetHeight + "px";
    });
});

function toggleInfo(card) {
    const infoDiv = card.querySelector('[class^="info-"]');
    const alturaOriginal = card.dataset.alturaOriginal;
    
    if (infoDiv) {
        // Para fechar
        if (card.style.maxHeight !== alturaOriginal) {
            infoDiv.style.maxHeight = "0px";
            infoDiv.style.opacity = "0";
            setTimeout(() => {
                card.style.maxHeight = alturaOriginal;
            }, 10); 
            
        } else {
            // Para abrir
            const alturaTexto = infoDiv.scrollHeight;     
            card.style.maxHeight = (parseInt(alturaOriginal) + alturaTexto + 20) + "px";
            infoDiv.style.maxHeight = alturaTexto + "px";
            infoDiv.style.opacity = "1";
        }
    }
}