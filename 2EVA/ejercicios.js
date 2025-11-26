/*
// Ejercicio 1 - Separa un texto en palabras y clacula la palabra más larga

function separarTexto(){
    let palabras = texto.split(' ');
    return palabras;
}


function palabraMasLarga(){
    let palabraMasLarga = '';  //creamos una cadena vacia

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].length > palabraMasLarga.length){
            palabraMasLarga = palabras[i];
        }
    }
    return palabraMasLarga;
}


let texto = prompt("Introduce una frase: ");
let palabras = separarTexto(texto);
alert("Tu frase separada por palabra es: " + palabras + ".\n La palabra más larga es: "+ palabraMasLarga(palabras));


//Ejercicio 2 - Verifica si una palabra comienza con "pre"

function comienzaCon(palabra, prefijo) {
    return palabra.toLowerCase().startsWith(prefijo.toLowerCase());
}

//Uso
let palabra = prompt("Introduce una palabra: ");
let prefijo = "pre";

if (comienzaCon(palabra, prefijo)) {
    alert("La palabra SI comienza con '" + prefijo + "'");
} else {
    alert("La palabra NO comienza con '" + prefijo + "'");
}


//Ejericicio 3 - Reemplaza "perro" por "gato" en una frase.
let frase1 = "Mi perro tiene mucha hambre";
let palabra1 = "perro";
let palabra2 = "gato";


let nuevaFrase = frase1.replace(palabra1, palabra2);
alert("La primera frase es: " + frase1 + "\nLa nueva frase cambiada es: " + nuevaFrase);


//Ejercicio 4 - crea una función que reciba dos números por parámetro y devuelva un número aleatorio entre ellos

function aleatorio(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);  //al poner 1 y al final el num1 hago que coja dentro del rango a ambos números
}

let num1 = Number(prompt("Introduce un número: "));
let num2 = Number(prompt("Introduce un número: "));

alert(aleatorio(num1,num2));
*/

//Ejercicio 5 - Creamos el objeto punto, que tiene como atributos el valor en eje X y el valor en eje Y (valX y ValY). Creamos una función que reciba dos objetos de tipo punto como parámetros y clacule la distancia entre ellos. BONUS

class Punto {
    constructor(valX, valY){
        this.valX = valX;
        this.valY = valY;
    
    }

}


function calcularDistancia(pA, pB) {
        const distanciaX = pB.valX - pA.valX;
        const distanciaY = pB.valY - pA.valY;
        
        return Math.sqrt((distanciaX**2) + (distanciaY**2));
    }

const punto1 = new Punto (1 , 3);
const punto2 = new Punto (6 , 3);

console.log(calcularDistancia(punto1,punto2));



