/*
EJERCICIO 1
Crear una calculadora de IVA.
 -pedir número
- operar número
- devolver número
*/

var iva = 0.21;
var num = Number (prompt("Introduce el número"));  //le vamos a dar el valor a la variable num que el usuario introduzca
var nConIVA = num * iva;
var precioFinal=  num + nConIVA;
alert ("Tu precio total con IVA es " + precioFinal);



