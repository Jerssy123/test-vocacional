// universidades.js

const carrera = localStorage.getItem("carreraSeleccionada");
document.getElementById("titulo").innerText = universidades ;del ;Guayas ;que ;ofrecen: ;{carrera};

const universidades = [
  {
    nombre: "ESPOL",
    tipo: "Pública",
    puntaje: 880,
    carreras: ["Ingeniería en Sistemas", "Tecnologías de la Información"]
  },
  {
    nombre: "Universidad de Guayaquil",
    tipo: "Pública",
    puntaje: 750,
    carreras: ["Contabilidad y Auditoría", "Ingeniería Ambiental", "Biología"]
  },
  {
    nombre: "Universidad Católica de Santiago de Guayaquil",
    tipo: "Privada",
    puntaje: 700,
    carreras: ["Medicina", "Ingeniería en Software", "Contabilidad y Auditoría"]
  },
  {
    nombre: "Universidad Ecotec",
    tipo: "Privada",
    puntaje: 650,
    carreras: ["Administración de Empresas", "Negocios Internacionales", "Ingeniería en Sistemas"]
  },
  {
    nombre: "UTEG",
    tipo: "Privada",
    puntaje: 600,
    carreras: ["Contabilidad y Auditoría", "Finanzas", "Bioquímica"]
  }
];

const contenedor = document.getElementById("universidades");

const filtradas = universidades.filter(u => u.carreras.includes(carrera));

if (filtradas.length === 0) {
  contenedor.innerHTML = "<p>No se encontraron universidades que ofrezcan esta carrera en el Guayas.</p>";
} else {
  filtradas.forEach(u => {
    const div = document.createElement("div");
    div.style.marginBottom = "20px";
    div.innerHTML = `
      <strong>${u.nombre}</strong><br>
      Tipo: ${u.tipo} <br>
      Puntaje de Admisión: ${u.puntaje}
    `;
    contenedor.appendChild(div);
  });
}