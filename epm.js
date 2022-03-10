let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    console.log("hola");
    let estracto = document.getElementById("estracto").value;
    let identidad = document.getElementById("iden").value;
    let deuda = document.getElementById("deuda").value;
    let correo = document.getElementById("correo").value;

    console.log(estracto);
    console.log(identidad);
    console.log(deuda);
    console.log(correo);
};
