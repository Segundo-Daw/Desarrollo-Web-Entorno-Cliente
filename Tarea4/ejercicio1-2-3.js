/* EJERCICIO 1:
Creamos un programa que pida números 
hasta que insertemos un 0, entonces nos indica la longitud del array*/

// Creamos un array vacío
let arrayNumeros = [];
let num;

//Vamos a crear un bucle para ir pidiendo números hasta que introduzcan un 0.
do{
    num = Number(prompt("Intoduce un número (intorudce 0 si quieres salir):"));
    //Si el número no es cero lo vamos agragando al array
    if (num !== 0){
        arrayNumeros.push(num);
    }
//se repite mientras sea diferente a cero    
}while(num !== 0);

//Mostramos la longitud del array que hemos creado
alert("Tu array está conpuesto por " + arrayNumeros.length + " números.\n" + "Contenido del array: " + arrayNumeros);


//si quisieramos mostrar por la consola el contenido del array
console.log("Lista de números introducidos; " , arrayNumeros);


/*EJERCICIO 2
Comprobar posteriormente si en el array existe al menos algún 5
*/
// Para comprobar si existe el método a utilizar es .includes()

if(arrayNumeros.includes(5)){
    alert("Tu array creado contiene el número 5")
}else{
    alert("Tu array no contiene el número 5.")
}


/*EJERCICIO 3
Pedir un número al usuario e indicar cuántas veces aparece en el array anterior
*/

var numeroBuscado = Number(prompt("Dime un número y te indico cuantas veces está en el array"));
let cont = 0;

for(let i=0; i < arrayNumeros.length; i++){
    if (arrayNumeros[i] == numeroBuscado){ 
        cont++;
    }
}

if (cont > 0){
    alert("El número buscado " + numeroBuscado + " se ha repetido" + cont + " veces");
}else{
    alert("El número buscado " + numeroBuscado + " no aparece en el array");

}




