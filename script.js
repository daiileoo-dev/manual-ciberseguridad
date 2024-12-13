function mostrarDetalles(producto) {
  document.getElementById(producto).style.display = 'block';
}

function ocultarDetalles(producto) {
  document.getElementById(producto).style.display = 'none';
}

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('¡Gracias por contactarnos! Te responderemos pronto.');
});