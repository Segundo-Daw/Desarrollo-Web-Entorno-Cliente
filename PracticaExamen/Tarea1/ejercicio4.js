/*
EJERCICIO 4
Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.
*/

var nombres = [];
var cantidad = 3;

for(let i = 0 ; i < cantidad; i++){
    nombres[i] = prompt("Introduce el nombre: ");
}

var repetido = false;

for(let i=0; i< cantidad;i++){
    for(let j = i + 1; j < cantidad; j++){
        if (nombres[i] === nombres[j]){
            repetido = true;
        }
    }
}

if (repetido){
    alert("Hay al menos dos nombre reptidos");
}else{
    alert("No hay nombres que se repitan");
}