/*
EJERCICIO 5
Se le pide al usuario el número de elementos que va a introducir para calcular su media.
*/

var number = Number(prompt("¿De cuántos números quieres calcular la media?"));
var suma = 0;

for (let i = 1; i <= number; i++){
    var a = Number(prompt("Introduce número:"));
    suma += a 
}

var media = suma / number;
alert (media);