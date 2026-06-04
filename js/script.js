
   'use strict'
   
   function toggleMobileMenu() {
        document.getElementById('mobileMenu').classList.toggle('open');
    }

    // Controle de Acessibilidade: Tamanho da Fonte
    let zoomLevel = 100;
    function ajustarFonte(step) {
        zoomLevel += (step * 10);
        // Trava de limites para não quebrar o layout (80% a 130%)
        if (zoomLevel > 130) zoomLevel = 130;
        if (zoomLevel < 80) zoomLevel = 80;
        
        document.documentElement.style.fontSize = zoomLevel + '%';
    }

    // Controle de Acessibilidade: Alto Contraste
    function toggleContraste() {
        document.body.classList.toggle('alto-contraste');
    }


    // Destacar a página atual no menu
document.addEventListener('DOMContentLoaded', () => {
    // Pega o nome do arquivo atual na barra de endereços (ex: marketplace.html)
    // Se estiver vazio (ex: só o domínio /), ele assume que é o index.html
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Seleciona todos os links do menu (desktop e mobile)
    const navLinks = document.querySelectorAll('.topnav-link, .mobile-link');
    
    navLinks.forEach(link => {
        // Remove a classe 'active' de todos os links por padrão
        link.classList.remove('active');
        
        // Se o atributo href do link for igual ao nome da página atual, adiciona o 'active'
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});