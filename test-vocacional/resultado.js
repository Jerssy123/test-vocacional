// resultado.js

const area = localStorage.getItem("areaSeleccionada");
const nombre = localStorage.getItem("nombreUsuario") || "Estudiante";

const mensaje = document.getElementById("mensaje");
const descripcion = document.getElementById("descripcion");
const container = document.getElementById("carreras-container");

const areas = {
  informatica: {
    nombre: "Informática",
    descripcion: "Te interesa el mundo de la programación, redes, sistemas y tecnología.",
    carreras: [
      "Ingeniería en Sistemas",
      "Ingeniería en Software",
      "Tecnologías de la Información",
      "Seguridad Informática",
      "Multimedia y Animación Digital"
    ]
  },
  contabilidad: {
    nombre: "Contabilidad",
    descripcion: "Te interesan las finanzas, la administración, y los números.",
    carreras: [
      "Contabilidad y Auditoría",
      "Economía",
      "Finanzas",
      "Administración de Empresas",
      "Negocios Internacionales"
    ]
  },
  ciencia: {
    nombre: "Ciencia",
    descripcion: "Te interesan las ciencias naturales, la investigación y la medicina.",
    carreras: [
      "Biología",
      "Medicina",
      "Bioquímica",
      "Ingeniería Ambiental",
      "Farmacia"
    ]
  }
};

if (!area || !areas[area]) {
  mensaje.innerText = "¡Ups! No pudimos identificar tu especialidad.";
} else {
  const datos = areas[area];
  mensaje.innerText = {nombre} ;perteneces ;al ;área ;de ;{datos.nombre};
  descripcion.innerText = datos.descripcion;
  // Mostrar imagen según área
   const imagenArea = document.getElementById("imagenArea");

    if (area === "informatica") {
    imagenArea.src = "informatica.jpg";
    } else if (area === "contabilidad") {
    imagenArea.src = "contabilidad.jpg";
    } else if (area === "ciencia") {
    imagenArea.src = "ciencia.jpg";
    } else {
    imagenArea.alt = "No se pudo cargar el área";
  }

  const lista = document.createElement("ul");
  datos.carreras.forEach(carrera => {
    const li = document.createElement("li");
    li.innerHTML = <button onclick="seleccionarCarrera('${carrera}')">${carrera}</button>;
    lista.appendChild(li);
  });

  container.appendChild(lista);
}

function seleccionarCarrera(carrera) {
  localStorage.setItem("carreraSeleccionada", carrera);
  window.location.href = "universidades.html";
}