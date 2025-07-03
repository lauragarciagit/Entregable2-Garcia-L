//Ingreso de nombre
const nombre = document.getElementById("nombre")
const btnEnviar = document.getElementById("btnEnviar")
const mensaje = document.getElementById("mensaje")

btnEnviar.addEventListener("click", () => {
  const nuevoTexto = nombre.value.trim()
  if (nuevoTexto !== "") {
    mensaje.textContent = `¡Hola, ${nuevoTexto}! Bienvenido/a a la trivia.`
    //nombre.value = ""; Se quitó para que pueda seguir con la opción de "guardar" o "eliminar" en el local storage
    nombre.focus()
  } else  {
    mensaje.textContent = "Debes ingresar un texto válido."
  }
})

//guardar nombre en local storage//
const botonGuardar = document.getElementById("guardarNombre")
const botonEliminar = document.getElementById("eliminarNombre")

botonGuardar.addEventListener("click", () => {
  const nuevoTexto = nombre.value.trim()
  if (nuevoTexto) {
    // Paso 1: obtener el array actual
    let nombres = JSON.parse(localStorage.getItem("nombres")) || []

    // Paso 2: agregar el nuevo nombre
    nombres.push(nuevoTexto)

    // Paso 3: guardar de nuevo en localStorage
    localStorage.setItem("nombres", JSON.stringify(nombres))
  }
})
//Eliminar nombre local storage//
botonEliminar.addEventListener("click", () => {
  localStorage.removeItem("nombre")
})

//Se pinta de acuerdo a la respuesta dada//

const buttons = document.querySelectorAll(".btn")
let puntos = 0

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.getAttribute("data-correcto") === "true"

    //Para que busque por contenedor y luego ubique el div correspondiente a la respuesta//
    const card = button.closest(".card")
    const respuesta = card.querySelector(".respuesta")

    //Puntaje. Suman 30 puntos por cada correcta y restan 10 puntos por incorrecta.
    function actualizarPuntaje() {
        document.getElementById("puntuacion").textContent = puntos
    //aqui me queda pendiente guardar valores en LocalStorage en la misa posicion del array que "nombre".
    }
    
    //Mensaje ganador y no ganador
    const puntosGanador = document.getElementById("puntosGanador")
    if (puntos >=200) {
        puntosGanador.innerText = "Felicitaciones! 🎉 ¡Ganaste! 🎉 2 entradas al teatro!!"
        puntosGanador.style.color = "#9C27B0"    // violeta fuerte
        puntosGanador.style.fontSize = "1.2rem"  // tamaño chico
        puntosGanador.style.fontWeight = "bold"  // negrita
        puntosGanador.style.textShadow = "1px 1px 2px black"  // opcional: para más impacto visual

    }
       else { //Error. Me corre ni bien genero la primer respuesta. (Buscando el error)
        puntosGanador.innerText = "Estuviste cerca de ganarte unas entradas al teatro 😞 Será la próxima..."
        puntosGanador.style.color = "#8D6E63"    // violeta apagado
        puntosGanador.style.fontSize = "1.2rem"  // tamaño chico
        
    }

    if (isCorrect) {
      puntos += 30

      button.style.backgroundColor = "#4CAF50" // verde
      button.style.color = "white"
      respuesta.textContent = "¡Correcto!"
      respuesta.style.color = "#4CAF50"
    } else {
      puntos -= 10

      button.style.backgroundColor = "#f44336" // rojo
      button.style.color = "white"
      respuesta.textContent = "Incorrecto."
      respuesta.style.color = "#f44336"
    }
    actualizarPuntaje()
    // Desactivar solo los botones de esta tarjeta
    const opciones = card.querySelectorAll(".btn")
    opciones.forEach((btn) => (btn.disabled = true))
  })
})
