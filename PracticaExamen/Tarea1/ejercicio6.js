/*
EJERCICIO 6
Se introduce el año de nacimiento y se indica si es mayor de edad o no.
*/

var actual = 2025;
var nacimiento = Number(prompt("Introduce tu año de nacimiento: "));

var calculo = actual - nacimiento;

if (calculo >= 18 ){
    alert ("es mayor de edad");
}else{
    alert ("es menor de edad");
}