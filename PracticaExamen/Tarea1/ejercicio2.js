// EJERCICIO 2 : Se le piden al usuario tres números y se devuelve la media.

var suma = 0;

for( let i = 0; i < 3; i++){
    var numero = Number(prompt("Introduce un número: "));
    suma += numero;
}

var media = suma/3;
alert (media);
