// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todas as seções, header e footer
  const sections = document.querySelectorAll('section, header, footer');

  // Função para revelar seções ao rolar a página
  const revealOnScroll = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.style.opacity = '1';
        sec.style.transform = 'translateY(0)';
      }
    });
  };

  // Executa ao carregar e ao rolar
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Smooth scroll ao clicar em links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Efeito glow animado nos ícones de contato
  const contatoIcons = document.querySelectorAll('.contato-card i');
  
  contatoIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transition = '0.3s all';
      icon.style.textShadow = '0 0 15px #00e6e6, 0 0 25px #00e6e6, 0 0 35px #00e6e6';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transition = '0.3s all';
      icon.style.textShadow = 'none';
    });
  });
});

