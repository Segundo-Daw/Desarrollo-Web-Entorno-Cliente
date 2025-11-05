/*
//Ejercicio 1
var array = [2,5,6,3,0,6];
var array2 = [];

for (let i = 0; i < array.length; i++){
    if (array[i] != array[i]){
        array.push(array2[i]);
    }
}

console.log(array2)
*/



/*
//Ejercicio 2



let number = Number(prompt("Introduce números que sean enteros y positivos: "));
let array = [];

while (number >= 0){
    if (number > 0){
        number = Number(prompt("Introduce número"));
        array.push(number);
    }
}

alert(array);

let suma = 0;
for ( let i = 0; i < array.length; i++){
    if (number % 2 == 0){
            suma += number;
        }
        suma += array[i];
    }

alert(" la suma del array es " + suma);
*/

/*
//Ejercicio 3


let numero = Number(prompt("Introduce el número del que quieras la tabla de multiplicar"));
let array = [];
let n = 0;
for (let i = 0; i <= 10; i++){
    n  = numero*i;
    array.push(n);
}
alert(array);

*/


/*
//Ejercicio4

var number = Number(prompt("Introduce el numero del que quieres su factorial:"));
let factorial = 1;
for (let i = 1; i <= number; i++){
    factorial *= i;

}
alert (factorial);
*/



//Ejercicio 5

var number = Number(prompt("Introduce un número con al menos un digito:"));

var digitos = 10; //contamos con que minimo tiene 2 digitos
var totalDigitos = 1;

 
    while(number >= digitos){
        totalDigitos++;
        digitos*=10;
    }
    

alert(totalDigitos);




