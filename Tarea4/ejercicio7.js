/* EJERCICIO 7
BONUS: Reutilizar el ejercicio 1 y posteriormente devuelve el array ordenado
*/

/* ejercicio - 1:
Creamos un programa que pida números 
hasta que insertemos un 0, entonces nos indica la longitud del array*/

// Creamos un array vacío
let arrayNumeros = [];
let num;

//Vamos a crear un bucle para ir pidiendo números hasta que introduzcan un 0.
do{
    num = Number(prompt("Intoduce un número (introduce 0 si quieres salir):"));
    //Si el número no es cero lo vamos agragando al array
    if (num !== 0){
        arrayNumeros.push(num);
    }
//se repite mientras sea diferente a cero    
}while(num !== 0);

//ORDENAMOS EL ARRAY (de forma ascendente), si quisieramos que fuese de forma descendente seria arrayNumeros.sort ((a , b) => b - a );

arrayNumeros.sort ((a , b) => a -b);

//Mostramos la longitud del array que hemos creado
alert("Tu array está conpuesto por " + arrayNumeros.length + " números.\n" + "Contenido del array ordenador de forma ascendente es: " + arrayNumeros);