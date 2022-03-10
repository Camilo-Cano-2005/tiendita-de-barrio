let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let tipEmpanada = document.getElementById("empanada").value;
    let cantidad = document.getElementById("cantidad").value;
    let nombre = document.getElementById("nombre").value;
    let identificacion = document.getElementById("iden").value;
    let correo = document.getElementById("correo").value;

    console.log(tipEmpanada);
    console.log(cantidad);
    console.log(nombre);
    console.log(identificacion);
    console.log(correo);
};
