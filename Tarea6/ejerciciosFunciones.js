// Ejercicio 1
// Crea una función que calcule el cuadrado de un número
/*
function cuadrado (num){
    return num**2;
}
//llamo a la funcion
let test = cuadrado(2);
*/


//Ejercicio 2
//Funcion calculadora de un número factorial
/*
function factorial (n){
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(3));
*/


// Ejercicio 3
// Función que convierta grados Celsius a Fahrenheit.


/*
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Fórmula de conversión
}

let variable = Number(prompt("Introduce el número que quieras calcular:"));
alert(celsiusToFahrenheit(variable));
*/


// Ejercicio 4
// Función esPrimo() que devuelva booleano.


/*
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

variable = esPrimo(3);
console.log(variable);
*/


// Ejercicio 5 
// Función que cuente el número de vocales de una palabra.

/*

function countVowels(word) {
  const vowels = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
  let count = 0;

  for (let letter of word) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("pingüino"));

*/

// Ejercicio 6 
// Función que reciba tres parámetros (a,b,c) y devuelva un array con las soluciones de una ecuación de segundo grado. (-b+-sqrt(b**2-4*a*c)/2*a)

/*
function ecuacion (a,b,c){
    let array =  [];
    let solution1;
    let solution2;

    solution1 = (-b-Math.sqrt(b**2-4*a*c))/(2*a);
    solution2 = (-b+Math.sqrt(b**2-4*a*c))/(2*a);

    array.push(solution1);
    array.push(solution2);
    return array;
}
let solution;
solution = ecuacion(1,5,6);
console.log(solution);

*/




// Ejercicio 7 
// Crea una función que reciba un número y un callback. Si el número es mayor a 10, ejecuta el callback.
/*
function callbackPrueba(number, callback) {
    if (number > 10) {
        callback();
    }else{
        alert("no tienes más de 10 años");
    }
}

function saludar(){
    alert("Hola, tienes mas de 10 años");
}

let comprobar = callbackPrueba(9,saludar);
alert(comprobar);

*/



// Ejercicio 8 
// Función que sume todos los elementos introducidos como parámetros, sin preestablecer el número de parámetros.

/*

function addElements(...numbers) {
    return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

const sum = addElements(1, 2, 3, 4, 5);
console.log(sum);

*/




// Ejercicio 9  
// Función que reciba un array de palabras y devuelva solo las que son palíndromos.

/*

function getPalindromes(words) {
    return words.filter(word => {
        const lower = word.toLowerCase();
        const reversed = lower.split('').reverse().join('');
        return lower === reversed;
    });
}

const words = ["ana", "ojo", "javascript", "html", "radar", "nivel", "LaRutaNatural"];
const palindromes = getPalindromes(words);

console.log(palindromes);

// otra forma de hacerlo

function filterPalindromers(palindromes){
    let result = [];
    for(const element of palindromes){
        let word = element.split("");
        word.reverse();
        word = word.join("");
        word == element ? result.push(word) : "";
    }
    return result;

}
alert (filterPalindromers(["oso", "reconocer", "alma"]));

*/