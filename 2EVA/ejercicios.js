
// Ejercicio 1 - Separa un texto en palabras y clacula la palabra más larga
/*
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

*/

//Ejercicio 2 - Verifica si una palabra comienza con "pre"
/*
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
*/

//Ejericicio 3 - Reemplaza "perro" por "gato" en una frase.
/*
let frase1 = "Mi perro tiene mucha hambre";
let palabra1 = "perro";
let palabra2 = "gato";


let nuevaFrase = frase1.replace(palabra1, palabra2);
alert("La primera frase es: " + frase1 + "\nLa nueva frase cambiada es: " + nuevaFrase);
*/

//Ejercicio 4 - crea una función que reciba dos números por parámetro y devuelva un número aleatorio entre ellos
/*
function aleatorio(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);  //al poner 1 y al final el num1 hago que coja dentro del rango a ambos números
}

let num1 = Number(prompt("Introduce un número: "));
let num2 = Number(prompt("Introduce un número: "));

alert(aleatorio(num1,num2));
*/

//Ejercicio 5 - Creamos el objeto punto, que tiene como atributos el valor en eje X y el valor en eje Y (valX y ValY). Creamos una función que reciba dos objetos de tipo punto como parámetros y clacule la distancia entre ellos. BONUS
/*
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

const punto1 = new Punto (4 , 6);
const punto2 = new Punto (1 , 2);

console.log(calcularDistancia(punto1,punto2));
*/

//Ejercicio 6 - Dada una fecha de cumpleaños determina en qué día de la semana nació y la edad a día de hoy.
/*

function cumpleanos(fechaNacimiento) {
  const fecha = new Date(fechaNacimiento);
  const hoy = new Date(); // creamos un objeto con la fecha y hora actual

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const diaSemana = diasSemana[fecha.getDay()];

  // Calcular edad
  let edad = hoy.getFullYear() - fecha.getFullYear();
  if (hoy < new Date(hoy.getFullYear(), fecha.getMonth(), fecha.getDate())) {
    edad--; // Si no ha cumplido este año, restar 1, esto es por si todavia no ha sido su cumpleaños y no lo calcule simplemente por el año
  }

  return { diaSemana, edad };
}

const resultado = cumpleanos("1996-7-29"); // Formato YYYY-MM-DD
console.log("Naciste un " + resultado.diaSemana + "\nTienes "  + resultado.edad +  " años.");

*/