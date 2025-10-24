/*
EJERCICIO 1
Tenemos un array de números para hacer un sorteo, pero algún@ list@ ha
metido su número más de una vez. Asegúrate de que ese array elimina sus
duplicados pasándolo a Set.
*/ 

// Creamos el array con número repetidos
let arraySorteo = [2,5,6,8,6,2,7,2];


// Convertimos el array en un Set para eliminar duplicados
let numerosUnicos = new Set(arraySorteo);

console.log("Array original:", arraySorteo);
console.log("Set sin duplicados:", numerosUnicos);


