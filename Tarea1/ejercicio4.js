/*
EJERCICIO 4
Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.
*/

var name1= prompt("Introduce el primer nombre: ");
var name2 = prompt("Introduce el segundo nombre: ");
var name3 = prompt("Introduce el tercer nombre: ");

if (name1 == name2){
    alert("El primer nombre y rel segundo son iguales");
}else if (name1 == name3){
    alert ("El primer nombre y el tercero son iguales");
}else if (name2 == name3){
    alert ("El segundo nombre es igual al tercero");
}else{
    alert ("Ningún nombre se ha repetido");
}
