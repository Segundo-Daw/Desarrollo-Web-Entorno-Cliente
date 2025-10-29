/*
EJERCICIO 5
Se introduce la nota numérica del examen y devuelve categoría 
(suspenso, aprobado, notable…).
*/

var nota = Number(prompt("Introduce tu nota para clasificarla: "));

if (nota > 10 || nota < 0){
    alert ("Nota inválida");
}else if (nota >= 7){
    alert("notable");
}else if(nota >=5){
    alert("suficiente");
}else if(nota >=9){
    alert("Sobresaliente");
}else{
    alert("SUSPENSO")
}