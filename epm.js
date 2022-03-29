let envBoton = document.getElementById("boton");

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault()
    let estrato = document.getElementById("estrato").value;
    let identidad = document.getElementById("iden").value;
    let deuda = document.getElementById("deuda").value;
    let correo = document.getElementById("correo").value;
    let descuento = 0
    let canTotal = 0

    if (estrato == "Estrato 1") {
        descuento = 0.4
        canTotal = deuda - (deuda*descuento)
    } else if (estrato == "Estrato 2"){
        descuento = 0.3
        canTotal = deuda - (deuda*descuento)
    } else if (estrato == "Estrato 3"){
        descuento = 0.2
        canTotal = deuda - (deuda*descuento)
    } else if (estrato == "Estrato 4"){
        canTotal = deuda - (deuda*descuento)
    } else if (estrato == "Estrato 5"){
        canTotal = deuda - (deuda*descuento)
    } else if (estrato == "Estrato 6"){
        canTotal = deuda - (deuda*descuento)
    }

    console.log("----------------------------------")
    console.log("Bienvenido al pago de facturas EPM")
    console.log("Tu estrato es " + estrato);
    console.log("Tu documento de identidad es " + identidad);
    console.log("El valor de tu deuda es de " + deuda + " pesos");
    console.log("Tu correo electronico es " + correo);
    console.log("El valor total de tu factura es de " + canTotal)
    console.log("----------------------------------")
};
