/*        
5.Crea dos arrays de números arr1 y arr2 con 5 elementos cada uno. 
Recorre ambos arrays y cuenta cuantos elementos son 
iguales y estan en la misma posicion. Imprime el resultado. 
*/

let array1 = [];
let array2 = [];
let valores1;
let valores2;
let iguales = 0;


for (let i = 0; i < 5; i++) {
    valores1 = Number(prompt("Introduce un valor para el primer array"));
    array1[i] = valores1;
}

for (let i = 0; i < 5; i++) {
    valores2 = Number(prompt("Introduce un valor para el segundo array"));
    array2[i] = valores2;
}

for (let i = 0; i < 5; i++) {
    if (array1[i] == array2[i]) {
        iguales++;
    }
}

alert("Los números del primer array son: " + array1 + " y los del segundo array son: " + array2);
alert("Hay " + iguales + " números iguales en las dos arrays que se han introducido");