//Ingreso de nombre//

const nombre = document.getElementById("nombre");
const btnEnviar = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

btnEnviar.addEventListener("click", ()=>{
    const nuevoTexto = nombre.value.trim()
    if(nuevoTexto !== "") {
        mensaje.textContent = "¡Hola, ${nuevoTexto}! Bienvenido/a a la trivia.";
        mensaje.style.color = "green";
        nombre.value = "";
        nombre.focus();
    }else {
        mensaje.textContent = "Debes ingresar un texto válido.";
        mensaje.style.color = "red";
    }
})