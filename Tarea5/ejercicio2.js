/*
EJERCICIO 2
Dados el setA = new Set([1,2,3,4]) y el setB = new Set([3,4,5,6]) devuelve un
set que contenga los elementos comunes en los dos anteriores (usando la
función filter que vimos con los arrays).
*/

let setA = new Set([1,2,3,4]);

let setB = new Set([3,4,5,6]);



// Convertimos setA a array y usamos filter
var elementosComunes = new Set([...setA].filter(elemento => setB.has(elemento)));

console.log(elementosComunes); // Set(2) { 3, 4 }

