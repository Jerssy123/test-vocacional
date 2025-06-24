// script.js
function empezarTest() {
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "") {
    alert("Por favor, ingresa tu nombre");
    return;
  }

  // Guardamos el nombre (para después mostrarlo)
  localStorage.setItem("nombreUsuario", nombre);

  // Ir al test (lo agregaremos en el siguiente paso)
  window.location.href = "test.html";
}