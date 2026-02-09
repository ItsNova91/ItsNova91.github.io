function toggleQ(btn) {
  const content = btn.nextElementSibling;
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}

function toggleMore(btn) {
  const more = btn.nextElementSibling;
  more.style.display =
    more.style.display === "block" ? "none" : "block";
}

function mostrar(id) {
  document.querySelectorAll(".seccion").forEach(sec => {
    sec.classList.remove("activa");
  });
  document.getElementById(id).classList.add("activa");
}

