let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let productos = document.getElementById("productos").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;

    console.log(productos);
    console.log(direccion);
    console.log(correo);
};
