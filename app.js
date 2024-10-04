// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor() {
  // Actualiza el color de fondo usando los valores RGB.
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
  rojo = e.target.value; // Actualiza el valor de la variable
  textoRojo.textContent = rojo; // Muestra el valor en el texto
  actualizarColor(); // Llama a la función para actualizar el color de fondo
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
  verde = e.target.value; // Actualiza el valor de la variable
  textoVerde.textContent = verde; // Muestra el valor en el texto
  actualizarColor(); // Llama a la función para actualizar el color de fondo
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
  azul = e.target.value; // Actualiza el valor de la variable
  textoAzul.textContent = azul; // Muestra el valor en el texto
  actualizarColor(); // Llama a la función para actualizar el color de fondo
});

// Inicializa el color de fondo al cargar la página
actualizarColor();
