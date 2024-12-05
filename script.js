// Botón para desplazarse a la sección de introducción
document.querySelector('.cta').addEventListener('click', () => {
  document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
});