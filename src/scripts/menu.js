const menu = document.querySelector('.menu');

window.addEventListener('resize', () => {  
  menu.setAttribute('aria-expanded', 'false');
});
