/*
4.Crea un array de 10 valores introducidos por teclado y devuelvo ordenado (SIN FUNCIONES)
*/

let array;
let valor;
array = [];

/*Rellenar el array*/
for (let i = 0; i < 10; i++) {
    valor = Number(prompt("Introduce un valor"));
    array[i] = valor;
}


for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            /*Intercambio  valores del array*/
            let valor = array[j];
            array[j] = array[j + 1];
            array[j + 1] = valor;
        }
    }
}

/*Mostrar el array ordenado */
for(let i=0; i<array.length; i++){
    array[i]+= " ";
}

alert("El array ordenado es: \n" + array);