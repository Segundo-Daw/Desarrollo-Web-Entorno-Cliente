/*EJERCICIO 6
Dado un array con precios, aplicar a todos un descuento indicado por prompt
*/

let precios = [23, 50, 45, 78];

var descuento = Number(prompt("Indica que porcentaje quieres añadir a los precios: "));

/*Como hay que crear un nuevo array con diferentes valores y modificando cada uno
se hace con map()*/

let preciosConDescuento = precios.map(precio => precio * (1 - descuento / 100));

/*si queremos que se muestre con decimales seria igual, pero usando toFixed().
preciosConDescuento = precios.map(precio => (precio * (1 - descuento / 100)).toFixed(2));  */

// Mostrar el resultado
alert("Precios con descuento:\n" + preciosConDescuento.join(" €\n") + " €");



