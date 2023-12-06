// https://uniwebsidad.com/foro/pregunta/311/como-obtener-la-posicion-coordenadas-x-e-y-de-un-elemento-html-mediante-javascript/

//! codigo JS
let X = 0;
let Y = 0;

let puntosNodoL = {};
let puntosNodoR = {};

// Función para obtenet puntos
function obtenPuntos(nodo) {
  let elemento = document.getElementById(nodo);
  let posicion = elemento.getBoundingClientRect();

  let coordX = nodo === "nodoR" ? posicion.right - 20 : posicion.right;
  let distPuntoAV = (posicion.bottom - posicion.top) / 2;
  let coordY = posicion.top + distPuntoAV;

  // Redondear coordenadas a números enteros
  coordX = Math.round(coordX);
  coordY = Math.round(coordY);

  return { coordX, coordY };
}

// Función para actualizar coordenadas y posición de la línea
function actualizarCoordenadas() {
  puntosNodoL = obtenPuntos("nodoL");
  puntosNodoR = obtenPuntos("nodoR");

  // Mostrar coordenadas redondeadas
  document.getElementById(
    "coordenadasNodoL"
  ).innerText = `Coordenadas X: ${puntosNodoL.coordX}, Y: ${puntosNodoL.coordY}`;
  document.getElementById(
    "coordenadasNodoR"
  ).innerText = `Coordenadas X: ${puntosNodoR.coordX}, Y: ${puntosNodoR.coordY}`;

  // Actualizar posición de la línea curva
  let svgContainer = document.getElementById("svgContainer");
  let pathConector = svgContainer.querySelector("path");

  // Definir la curva cúbica (C) con los puntos de control
  let pathData = `M${puntosNodoL.coordX},${puntosNodoL.coordY} C${
    puntosNodoL.coordX + 60
  },${puntosNodoL.coordY} ${puntosNodoR.coordX - 60},${puntosNodoR.coordY} ${
    puntosNodoR.coordX
  },${puntosNodoR.coordY}`;

  pathConector.setAttribute("d", pathData);
}

// Actualizar coordenadas cuando cambie el tamaño de la ventana
window.addEventListener("resize", actualizarCoordenadas);
// Llamar a la función para inicializar las coordenadas y la línea
actualizarCoordenadas();

// Mostrar coordenadas en los párrafos correspondientes
document.getElementById(
  "coordenadasNodoL"
).innerText = `Coordenadas X: ${puntosNodoL.coordX}, Y: ${puntosNodoL.coordY}`;
document.getElementById(
  "coordenadasNodoR"
).innerText = `Coordenadas X: ${puntosNodoR.coordX}, Y: ${puntosNodoR.coordY}`;

//! Coordenadas del cursor por pantalla
// Función para mostrar las coordenadas del cursor
function mostrarCoordenadasCursor(event) {
  let coordenadasCursor = document.getElementById("coordenadasCursor");

  // Obtener las coordenadas del cursor
  let coordX = event.clientX;
  let coordY = event.clientY;

  // Mostrar las coordenadas en el elemento correspondiente
  coordenadasCursor.innerText = `Coordenadas del Cursor - X: ${coordX}, Y: ${coordY}`;
}

// Agregar un event listener al documento para seguir el movimiento del cursor
document.addEventListener("mousemove", mostrarCoordenadasCursor);
