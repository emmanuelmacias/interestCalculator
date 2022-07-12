let valorProducto = Number(prompt('Ingresar valor total del Producto en $'));
let cantidadCuotas = parseInt(prompt('Elegir Plan de Pago/s \n( 1, 2, 3, 4, 6, 8, 10 y 12 cuotas)'));
let valorFinal = 0;


// MEDIANTE WHILE SE COMPRUEBA QUE SEA UN NUMERO
while (parseInt(valorProducto)) {
    switch (cantidadCuotas) {
        case 1:
            valorFinal = valorProducto; // SIN INTERES
            cuota = "0%"
            calcular();
            break;
        case 2:
            valorFinal = valorProducto * 1.0590; // SIN INTERES
            cuota = "0%"
            calcular();
            break;
        case 3:
            valorFinal = valorProducto * 1.0590; // RECARGO 5,9%
            cuota = "5,9%"
            calcular();
            break;
        case 4:
            valorFinal = valorProducto * 1.1874; // RECARGO 18,74%
            cuota = "18,74%"
            calcular();
            break;
        case 6:
            valorFinal = valorProducto * 1.2791 // RECARGO 27,91%
            cuota = "27,91%"
            calcular();
            break;
        case 8:
            valorFinal = valorProducto * 1.3737 // RECARGO 37,37%
            cuota = "37,37%"
            calcular();
            break;
        case 10:
            valorFinal = valorProducto * 1.4997 // RECARGO 49,97%
            cuota = "49,97"
            calcular();
            break;
        case 12:
            valorFinal = valorProducto * 1.6310 // RECARGO 63,10%
            cuota = "63,1%"
            calcular();
            break;
        default:
            alert(`El plan en ${cantidadCuotas} pagos no esta disponible`);
    }
    // UNA VEZ REALIZADA LA OPERACION SE VUELVEN A PEDIR LOS DATOS
    valorProducto = Number(prompt('Ingresar valor total del Producto en $'));
    cantidadCuotas = parseInt(prompt('Elegir Plan de Pago/s \n( 1, 2, 3, 4, 6, 8, 10 y 12 cuotas)'));
    valorFinal = 0;
}

// FUNCION ALL IN ONE, CALCULA Y MUESTRA EN UN ALERT EL RESULTADO
function calcular() {
    precioCuota = valorFinal / cantidadCuotas;
    alert(`Pagás ${cantidadCuotas} cuotas de $${(precioCuota).toFixed(2)} | TOTAL FINAL: $${(valorFinal).toFixed(2)} | RECARGO: ${cuota}`)

}

