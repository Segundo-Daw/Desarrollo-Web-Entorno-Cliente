/*
EJERCICIO 3
El usuario introduce un número y la consola indica su es par o impar
*/

var num = Number(prompt ("Introduce un número : "));
if (num %2 == 0){
    alert ("El número " + num +  "es par.");
}else {
    alert ("El número " + num + " es impar.")
}