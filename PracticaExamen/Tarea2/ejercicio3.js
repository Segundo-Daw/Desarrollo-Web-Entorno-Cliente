/*
EJERCICIO 3
Crea un programa que “cuente” la cantidad de dígitos de un número (sin funciones).
*/

count = 1; //empieza en cero porque mínimo tiene que haber un dígito
limite = 10; // límite que el número debe superar para tener un dígito más

var numero = Number(prompt("Introduce un número de más de dos dígitos"));

while (limite <= numero){
    count++;
    limite *=10;
}
alert (count);