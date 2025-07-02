//Ingreso de nombre//

const nombre = document.getElementById("nombre");
const btnEnviar = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

btnEnviar.addEventListener("click", ()=>{
    const nuevoTexto = nombre.value.trim()
    if(nuevoTexto !== "") {
        mensaje.textContent = `¡Hola, ${nuevoTexto}! Bienvenido/a a la trivia.`;
        //nombre.value = ""; Se quitó para que pueda seguir con la opción de "guardar" o "eliminar" en el local storage
        nombre.focus();
    }else {
        mensaje.textContent = "Debes ingresar un texto válido.";
    }
})

//guardar nombre en local storage//
const botonGuardar = document.getElementById("guardarNombre");
const botonEliminar = document.getElementById("eliminarNombre");


botonGuardar.addEventListener("click", () => {
  const nuevoTexto = nombre.value.trim()
  if (nuevoTexto) {
    // Paso 1: obtener el array actual 
    let nombres = JSON.parse(localStorage.getItem("nombres")) || [];

    // Paso 2: agregar el nuevo nombre
    nombres.push(nuevoTexto);

    // Paso 3: guardar de nuevo en localStorage
    localStorage.setItem("nombres", JSON.stringify(nombres)) 
  }
})
//Eliminar nombre local storage//
botonEliminar.addEventListener("click", () => {
  localStorage.removeItem("nombre")
    
  }
)

//Se pinta de acuerdo a la respuesta dada//

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
button.addEventListener('click', () => {
const isCorrect = button.getAttribute('data-correcto') === 'true';

//Para que busque por contenedor y luego ubique el div correspondiente a la respuesta//
const card = button.closest('.card');
const respuesta = card.querySelector('.respuesta');

if (isCorrect) {
    button.style.backgroundColor = "#4CAF50"; // verde
    button.style.color = "white";
    respuesta.textContent = "¡Correcto!";
    respuesta.style.color = "#4CAF50";

} else {
    button.style.backgroundColor = "#f44336"; // rojo
    button.style.color = "white";
    respuesta.textContent = "Incorrecto.";
    respuesta.style.color = "#f44336";

}

// Desactivar solo los botones de esta tarjeta
const opciones = card.querySelectorAll('.btn');
opciones.forEach(btn => btn.disabled = true);

});
});