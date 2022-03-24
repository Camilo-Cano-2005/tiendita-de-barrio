let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    console.log("hola");
    let estracto = document.getElementById("estracto").value;
    let identidad = document.getElementById("iden").value;
    let deuda = document.getElementById("deuda").value;
    let correo = document.getElementById("correo").value;
    let precio = 0

    if (estracto == "Estracto 1" || estracto == "Estracto 2") {
        precio = 32321321
    } else {
        precio = 300000
    }

    console.log(estracto);
    console.log(identidad);
    console.log(deuda);
    console.log(correo);
};
