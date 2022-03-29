let envBoton = document.getElementById("boton");
envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let ciudades = document.getElementById("ciudades").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let Fecha = 0

    if (ciudades == "Medellin") {
        Fecha = "Agosto 8 del 2022"
        alert("La fecha del concierto es: " + Fecha)
    } else if (ciudades == "Bogota") {
        Fecha = "Agosto 11 del 2022"
        alert("La fecha del concierto es: " + Fecha)
    } else if (ciudades == "Cali") {
        Fecha = "Agosto 15 del 2022"
        alert("La fecha del concierto es: " + Fecha)
    } else {
        Fecha = "En esta ciudad no hay concierto"
        alert(Fecha)
    }
    console.log("Tu dirección es " + direccion + "\n" + "Tu correo electronico es " + correo);
}