const nombre = document.getElementById("nombreProducto");
const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const formulario = document.getElementById("formulario");


nombre.addEventListener("input", () =>{
    if (nombre.value != ""){
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
    }else{
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }

})