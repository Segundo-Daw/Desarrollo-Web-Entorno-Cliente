/*
1.Se le pide al usuario el número de valores a introducir. 
Posteriormente se le van pidiendo.Se le devuelven ordenados. ¿Cómo?
*/

var cantidad = Number(prompt("¿Cúnatos números quieres introducir?"));
count = Number(cantidad);

if (cantidad > 0) {
 let values = [];
 for (let i = 0; i < count; i++) {
   let value = Number(prompt("Ingresa el número: "));
   values[i] = value  // con esto estoy diciendole que me añada los numeros que introduce en mi array inicial

  }

 // Lo que hace esto es ordenarlo manualmente de menor a mayor
 for (let i = 0; i < values.length - 1; i++) {
   for (let j = 0; j < values.length - 1 - i; j++) {
     if (values[j] > values[j + 1]) {
       let z = values[j];
       values[j] = values[j + 1];
       values[j + 1] = z;
     }
   }
 }

 alert("Los valores ordenados de menor a mayor: " + values);

} else {

 alert("Debes ingresar un número válido mayor que cero.");

}
