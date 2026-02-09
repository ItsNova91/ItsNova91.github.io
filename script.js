function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}

function toggleInfo() {
  const info = document.getElementById("extraInfo");
  info.classList.toggle("oculto");
}

