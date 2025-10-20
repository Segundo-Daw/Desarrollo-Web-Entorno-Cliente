/*
El adivinador: Crear un código que adivine un número del 1 al 100.
El usuario piens un número y el ordenador es el que pregunta si es o no el número 
y lo va acotando preguntando
*/

let min = 1;
let max = 100;
let adivinado2 = false;

alert("Piensa eun número entre " + min + " y " + max + ". Yo intentaré adivinarlo");

while (!adivinado2){
    let intento = Math.floor((min + max) / 2);
    let respuesta = prompt("¿Es tu número " + intento + "? (responde: mayor, menor, correcto)");

    if (respuesta === "correcto"){
        alert("¡Genial! Adiviné tu número: " + intento);
        adivinado2 = true;
    }else if (respuesta === "mayor"){
        min = intento + 1;
    }else if (respuesta === "menor"){
        max = intento - 1;
    }else{
        alert("Por favor responde solo con: mator, menor o correcto");
    }
}

/*
ESTE ES EL USURIO EL QUE ADIVINA EL NÚMERO

const adivinador = Math.floor(Math.random() * 100) +1;
var intentos;

do{
    intentos  = Number(prompt("Introduce un número del 1 al 100"));

    if (intentos > 100){
        alert ("El número que debes introducir debe ser menor de 100. Intentalo de nuevo");
    }else if(intentos < 0){
        alert ("El número debe ser a partir del 1. Vuelve a intentarlo");
    }else if (intentos > adivinador){
        alert("Introduce un número menor");
    }else if (intentos < adivinador ){
        alert ("Introduce un número mayor");
    }else{
        alert("CORRECTO");
    }
}
while (adivinador != intentos);
*/





