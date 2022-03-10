let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let tribunas = document.getElementById("tribunas").value;
    let cantidad = document.getElementById("cantidad").value;
    let identificacion = document.getElementById("Identidad").value;
    let nombre = document.getElementById("Nombres").value;
    let apellidos = document.getElementById("Apellidos").value;
    let correo = document.getElementById("correo").value;


    console.log(tribunas);
    console.log(cantidad);
    console.log(nombre);
    console.log(identificacion);
    console.log(apellidos);
    console.log(correo);
};
