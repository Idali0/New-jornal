// Função para as setas de navegação
function scrollGrid(id, val) {
    document.getElementById(id).scrollLeft += val;
}

function gerarNoticias(containerId, total) {
    const container = document.getElementById(containerId);
    
    // Simular carregamento (Skeleton Loading por 1.5 segundos)
    setTimeout(() => {
        container.innerHTML = ''; // Remove os skeletons
        
        const imagens = [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            "https://images.unsplash.com/photo-1546519638-68e109498ffc",
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
        ];

        for (let i = 1; i <= total; i++) {
            const card = document.createElement('article');
            card.className = 'news-card';
            card.onclick = () => abrirNoticia(`Notícia Importante #${i}`, "Geral", "O conteúdo detalhado desta notícia está a ser redigido pela equipa do Sequele.");

            card.innerHTML = `
                <img src="${imagens[i % imagens.length]}?auto=format&fit=crop&w=400&q=80&sig=${i}" class="news-thumb">
                <span class="news-category">Destaque</span>
                <h3 class="news-title">Acompanhe as atualizações da nossa Centralidade #${i}</h3>
            `;
            container.appendChild(card);
        }
    }, 1500); // 1.5 segundos de animação skeleton
}

function abrirNoticia(titulo, categoria, corpo) {
    localStorage.setItem('temp_titulo', titulo);
    localStorage.setItem('temp_cat', categoria);
    localStorage.setItem('temp_corpo', corpo);
    window.location.href = 'noticia.html';
}

document.addEventListener('DOMContentLoaded', () => {
    gerarNoticias('grid-destaque', 15);
    gerarNoticias('grid-nacional', 15);
});