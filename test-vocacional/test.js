// test.js

const preguntas = [
  {
    texto: "¿Qué actividad disfrutas más?",
    opciones: [
      { texto: "Programar o usar computadoras", area: "informatica" },
      { texto: "Llevar cuentas o analizar costos", area: "contabilidad" },
      { texto: "Hacer experimentos o investigar", area: "ciencia" }
    ]
  },
  {
    texto: "¿Qué materia te interesa más?",
    opciones: [
      { texto: "Tecnología / Informática", area: "informatica" },
      { texto: "Matemáticas / Economía", area: "contabilidad" },
      { texto: "Biología / Química", area: "ciencia" }
    ]
  },
  {
    texto: "¿En qué te gustaría trabajar?",
    opciones: [
      { texto: "Desarrollo de software o redes", area: "informatica" },
      { texto: "Gestión financiera o auditoría", area: "contabilidad" },
      { texto: "Investigación médica o ambiental", area: "ciencia" }
    ]
  }
];

let preguntaActual = 0;
let respuestas = [];

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  document.getElementById("pregunta").innerText = pregunta.texto;

  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  pregunta.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.innerText = opcion.texto;
    btn.onclick = () => seleccionarOpcion(index);
    opcionesDiv.appendChild(btn);
  });

  document.getElementById("siguiente").style.display = "none";
}

function seleccionarOpcion(indice) {
  const botones = document.querySelectorAll("#opciones button");
  botones.forEach(btn => btn.classList.remove("seleccionado"));
  botones[indice].classList.add("seleccionado");

  respuestas[preguntaActual] = preguntas[preguntaActual].opciones[indice].area;
  document.getElementById("siguiente").style.display = "inline-block";
}

function siguientePregunta() {
  if (preguntaActual < preguntas.length - 1) {
    preguntaActual++;
    mostrarPregunta();
  } else {
    // Contar cuál área fue seleccionada más veces
    const conteo = { informatica: 0, contabilidad: 0, ciencia: 0 };
    respuestas.forEach(area => conteo[area]++);

    let resultado = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);
    localStorage.setItem("resultadoArea", resultado);
    window.location.href = "resultado.html";
  }
}

mostrarPregunta();