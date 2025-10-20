/*
3.Crea una lista de notas. Calcula la media total y la media sólo de los aprobados. BONUS si se hace con y sin arrays.
*/

var notas = [9,5,6,7,8,4 ,3 ];
let suma = 0;
var sumaAprobados = 0;
var sumaSuspensos = 0;
var countAprobados = 0;
var countSuspensos = 0;

for( let i = 0; i < notas.length ; i++){
    suma += notas [i];
    if  (notas[i] < 5){
    sumaSuspensos += notas[i];
    countSuspensos++;

    }else{
    sumaAprobados += notas[i];
    countAprobados++;

    }
    
}
var media = suma/notas.length;
var mediaAprobados = sumaAprobados /countAprobados;
var mediaSuspensos= sumaSuspensos /countSuspensos;

alert("La media total de los aprobados es " + mediaAprobados + ". La media total de los suspensos es " + mediaSuspensos + " y la media total general es " + media);


// Sin arrays
var nota1 = 9; 
var nota2 = 5; 
var nota3 = 6; 
var nota4 = 7; 
var nota5 = 8; 
var nota6 = 4; 
var nota7 = 3; 

var sumTotal = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
var mediaTotal = sumTotal / 7;
var sumAprobados = nota1 + nota2 + nota3 + nota4 + nota5;
var mediaAprobado = sumAprobados/5;

alert("La media total es " + mediaTotal + " mientras que la media de aprobados es " + mediaAprobado);