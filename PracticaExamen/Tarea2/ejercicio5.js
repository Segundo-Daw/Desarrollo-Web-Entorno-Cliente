/*
EJERCICIO 5
Se le pide al usuario el número de elementos que va a introducir para calcular su media.
*/

var cantidad = Number(prompt("¿De cuántos números vas a querer la media"));
var suma = 0;

for ( let i = 0; i < cantidad; i++){
    var numero = Number(prompt("Introduce número: "));
    suma += numero;
}

var media = suma / cantidad;
alert ("La media de los " + cantidad + " números es: " + media);