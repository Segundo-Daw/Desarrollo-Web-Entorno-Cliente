// Ejercicio 1 
// Utiliza la recursividad para sumar todos los elementos de un array (sin bucles)
function sumarArray(array){
      // Caso base >>> si el array está vacío, la suma es 0
    if (array.length === 0) {
        return 0;
    }
    // Caso recursivo  >>> suma el primer elemento con la suma del resto del array
    return array[0] + sumarArray(array.slice(1));  //slice nos indica que devuelve otro array nuevo sin modificar el original pero si el numero de la primera posicion

    //ESTO ES LO QUE VA HACIENDO 
    //Primera llamada: arr = [1,2,3,4,5] → 1 + sumaArray([2,3,4,5])
    //Segunda llamada: arr = [2,3,4,5] → 2 + sumaArray([3,4,5])
    //Tercera llamada: arr = [3,4,5] → 3 + sumaArray([4,5])
    //Cuarta llamada: arr = [4,5] → 4 + sumaArray([5])
    //Quinta llamada: arr = [5] → 5 + sumaArray([])
    //Sexta llamada (caso base): arr = [] → retorna 0

}

let  array = [1, 2, 3, 4, 5];
console.log(sumarArray(array)); 




//Ejercicio 2
//Crea una función que devuelva el string introducido por paŕametro en orden inverso

function palabraInversa(word){
    //caso base >>> si el string contiene mínimo un carácter 
    if(word.length <= 1){  //tiene que ser 1 porque la longitud de un string nunca es menor de 0
        return word;
    }
    
    // Caso recursivo >> tomar el último carácter y agregar la inversión del resto
    return word[word.length - 1] + palabraInversa(word.slice(0, word.length - 1));
}

// Ejemplo de uso
console.log(palabraInversa("hola")); // lo que se va a ver por la consola es =   "aloh"


