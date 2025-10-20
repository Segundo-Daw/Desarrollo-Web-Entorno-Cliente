/*EJERCICIO 4
En un programa con un array predefinido con varios nombre, 
pedirle uno al usuario y comprobar si está o no.
*/

let arrayNames = ["yolanda", "carolina", "ruben", "ares", "olivia", "juan"];

var nameUser = prompt("Introduce un nombre, el que quieras y te digo si esta o no en el array.");

if (arrayNames.includes(nameUser)){
    alert("El nombre " + nameUser + " si que se encuentra en el array");
}else{
    alert ("El nombre " + nameUser + " no se encuentra en el array")
}

alert("Los nombres que se encuentran en el array son: " + arrayNames);

