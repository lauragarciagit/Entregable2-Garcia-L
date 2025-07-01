//Ingreso de nombre//

const nombre = document.getElementById("nombre")
const btnNombre = document.querySelector("#btnNombre")

btnNombre.addeventlistener("click", ()=>{
    const nuevoTexto = nombre.value
    if(nuevoTexto.trim() !== ""){
        nombre.textContent = nuevoTexto;
        nombre.value = ""
        nombre.focus();
    }else {
        alert("Debes ingresar un texto válido")
    }
})